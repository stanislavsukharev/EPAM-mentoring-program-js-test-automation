const BaseComponent = require("../common/base.component");

class PatientsWrapperComponent extends BaseComponent {
  constructor() {
   super(".patients-detail-wrapper");
  }

  get firstRow() {
    return this.rootEl.$("div.e-responsive-header table[role=grid] tbody tr:first-child");
  }
}

module.exports = PatientsWrapperComponent;