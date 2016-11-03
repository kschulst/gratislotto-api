'use strict';

var _ = require('lodash');
var Checkit = require('checkit');

module.exports = function(Ticket) {

  Ticket.validate('ticket', ticketValidator, {message: 'Invalid lotto ticket'});
  Ticket.validate('rows', rowsValidator, {message: 'Invalid lotto ticket'});
// TODO Implement allow only one ticket per email

  function ticketValidator(err) {
    var checkit = new Checkit({
      email: ['required', 'email']
    });

    var [checkitErr, res] = checkit.validateSync(this);
    if (checkitErr) {
      err("invalidEmail");
    }
  };

  function rowsValidator(err) {
    let validRows = 0;
    for (var rowNo = 1; rowNo <= 10; rowNo++) {
      var row = this['row' + rowNo];
      if (row) {
        if (row.length !== 7 && row.length !== 0) {
          err("lottoRowMustHave7Numbers");
        }
        if (! _.every(row, n => (n<35 && n>0))) {
          err("lottoRowMustBeNumbersBetween1And34");
        }

        validRows++;
      }
      // TODO: Implement numbers must be unique
    }

    if (validRows == 0) {
      err("lottoTicketMustHaveAtLeast1Row")
    }
  }

  function countRows(ticket) {
    var count = 0;
    for (var rowNo = 1; rowNo <= 10; rowNo++) {
      if (ticket['row' + rowNo]) {
        count++
      }
    }
    return count;
  }

  function matchRow(rowNumbers, lottoResult) {
    var numbersMatch = _.intersection(rowNumbers, lottoResult.numbers);
    var addNumbersMatch = _.intersection(rowNumbers, lottoResult.addNumbers);

    // TODO: Move prizeTypes out and use as constant
    var prizeTypes = ["7", "6+1", "6", "5", "4+1"]
    var matchType = "" + numbersMatch.length + ((addNumbersMatch.length>0 && _([4,6]).includes(numbersMatch.length)) ? "+1" : "")
    var isWin = _(prizeTypes).includes(matchType);
    if (! isWin) {
      matchType = "n"
    }

    var prize = (isWin && lottoResult.prizes) ? lottoResult.prizes[_.indexOf(prizeTypes, matchType)] : undefined;

    var match = {
      date: lottoResult.drawDate,
      prizeType: isWin ? matchType : "n",
      prize: prize,
      numbersMatch: numbersMatch,
      addNumbersMatch: addNumbersMatch,
      lottoResult: {
        drawId: lottoResult.id,
        numbers: lottoResult.numbers,
        addNumbers: lottoResult.addNumbers
      },
      isWin: isWin
    }

    return match;
  }

  function winsByPrizeType(wins) {
    var winsByType = {};
    wins.forEach(function(win) {
      winsByType[win.prizeType] = winsByType[win.prizeType]+1 || 1;
    });

    return winsByType;
  }

  function rowCostByDate(date) {
    if (date < new Date("1990-01-21")) {
      return 1
    }
    if (date < new Date("1997-01-01")) {
      return 2
    }
    if (date < new Date("2006-04-08")) {
      return 3
    }
    if (date < new Date("2015-03-21")) {
      return 4
    }
    else {
      return 5
    }
  }

  function ticketStatistics(cb, ticket, calcStartDate, calcEndDate) {
    calcStartDate = calcStartDate || new Date("1985-05-01"); // TODO: Use constant instead
    calcEndDate = calcEndDate || new Date();
    var app = Ticket.app;
    var rowCount = countRows(ticket);

    app.models.LottoResult.find({
      where: {
        drawDate: {between: [calcStartDate, calcEndDate]}
      },
      order: 'drawDate ASC'
    }).then(function(lottoResults) {
      var wins = [];
      var balance = {
        total: {
          profit: 0,
          cost: 0
        }
      };
      var drawCount = lottoResults.length;
      var drawsWithWinCount = 0;
      var firstDrawDate = lottoResults[0].toObject().drawDate;
      var lastDrawDate = lottoResults[lottoResults.length - 1].toObject().drawDate;

      lottoResults.forEach(function (lottoResult) {
        var drawHasWin = false;
        var rowCost = rowCostByDate(lottoResult.drawDate);

        for (var rowNo = 1; rowNo <= 10; rowNo++) {
          var rowNumbers = ticket['row' + rowNo];
          if (rowNumbers) {

            if (!balance['row' + rowNo]) {
              balance['row' + rowNo] = {
                profit: 0,
                cost: 0
              }
            }

            var match = matchRow(rowNumbers, lottoResult.toObject());
            if (match.isWin) {
              match.isWin = undefined;
              match.rowNo = rowNo;
              drawHasWin = true;
              wins.push(match);
              balance.total.profit += match.prize;
              balance['row' + rowNo].profit += match.prize;
            }

            balance.total.cost += rowCost;
            balance['row' + rowNo].cost += rowCost;
            balance['row' + rowNo].profitVsCost = balance['row' + rowNo].profit - balance['row' + rowNo].cost;
          }
        }

        balance.total.profitVsCost = balance.total.profit - balance.total.cost;

        if (drawHasWin) {
          drawsWithWinCount++;
        }
      }.bind(this));

      cb(null, {
        calcStartDate: calcStartDate,
        calcEndDate: calcEndDate,
        firstDrawDate: firstDrawDate,
        lastDrawDate: lastDrawDate,
        ticket: ticket,
        rowCount: rowCount,
        drawCount: drawCount,
        rowsInDraws: rowCount * drawCount,
        drawsWithWinCount: drawsWithWinCount,
        drawsWithWinPct: _.round(drawsWithWinCount / drawCount, 4) * 100,
        drawsWithoutWinCount: drawCount - drawsWithWinCount,
        drawsWithoutWinPct: _.round((drawCount - drawsWithWinCount) / drawCount, 4) * 100,
        rowsWithWin: wins.length,
        balance: balance,
        winsByPrizeType: winsByPrizeType(wins),
        wins: wins
      });
    }.bind(this));
  }

  Ticket.prototype.statistics = function(calcStartDate, calcEndDate, cb) {
    calcStartDate = calcStartDate || this.registeredTimestamp;
    var ticket = this.toObject();
    ticketStatistics(cb, ticket, calcStartDate, calcEndDate);
  }

  Ticket.remoteMethod(
    'statistics',
    {
      isStatic: false,
      accepts: [
        {arg: 'calcStartDate', type: 'date'},
        {arg: 'calcEndDate', type: 'date'}
      ],
      http: {verb: 'get'},
      returns: {arg: 'statistics', type: 'Object'}
    }
  );

};
