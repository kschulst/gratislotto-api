'use strict';

var every = require('lodash/every');

module.exports = function(Kupong) {
  Kupong.validate('rekker', customValidator, {message: 'Bad name'});
  function customValidator(err) {

    if (this.rekker.length === 0 ) {
      err("lottoTicketMustHaveAtLeast1Row")
    }
    if (this.rekker.length > 10) {
      err("lottoTicketCannotHaveMoreThan10Rows")
    }

    for (var i = 0; i < this.rekker.length; i++) {
      var rekke = this.rekker[i];

      if (rekke.length !== 7) {
        err("lottoRekkeMustHave7Numbers");
      }

      if (! every(rekke, n => (n<35 && n>0))) {
        err("lottoRekkeMustBeNumbersBetween1And34");
      }

    }
  };

};
