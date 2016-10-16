'use strict';

var every = require('lodash/every');

module.exports = function(Ticket) {
  Ticket.validate('rows', ticketValidator, {message: 'Invalid lotto ticket'});
//  Ticket.validatesAbsenceOf('registeredTimestamp');

  function ticketValidator(err) {
    if (this.rows.length === 0 ) {
      err("lottoTicketMustHaveAtLeast1Row")
    }
    if (this.rows.length > 10) {
      err("lottoTicketCannotHaveMoreThan10Rows")
    }

    for (var i = 0; i < this.rows.length; i++) {
      var row = this.rows[i];

      if (row.length !== 7) {
        err("lottoRowMustHave7Numbers");
      }

      if (! every(row, n => (n<35 && n>0))) {
        err("lottoRowMustBeNumbersBetween1And34");
      }
    }
  };

};
