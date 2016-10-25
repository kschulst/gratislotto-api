'use strict';

var every = require('lodash/every');
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
    for (var rowNo = 1; rowNo < 10; rowNo++) {
      var row = this['row' + rowNo];
      if (row) {
        if (row.length !== 7 && row.length !== 0) {
          err("lottoRowMustHave7Numbers");
        }
        if (! every(row, n => (n<35 && n>0))) {
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


};
