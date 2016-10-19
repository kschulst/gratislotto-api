'use strict';

var every = require('lodash/every');
var Checkit = require('checkit');

module.exports = function(Ticket) {

  Ticket.validate('ticket', ticketValidator, {message: 'Invalid lotto ticket'});
  Ticket.validate('rows', rowsValidator, {message: 'Invalid lotto ticket'});


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
    if (this.rows.length === 0 ) {
      err("lottoTicketMustHaveAtLeast1Row")
    }
    if (this.rows.length > 10) {
      err("lottoTicketCannotHaveMoreThan10Rows")
    }

    for (var i = 0; i < this.rows.length; i++) {
      var row = this.rows[i];

      if (row.length !== 7 && row.length !== 0) {
        err("lottoRowMustHave7Numbers");
      }

      if (! every(row, n => (n<35 && n>0))) {
        err("lottoRowMustBeNumbersBetween1And34");
      }

      // TODO: Implement numbers must be unique
    }
  };

};
