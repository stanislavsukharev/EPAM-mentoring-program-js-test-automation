const BaseComponent = require("../common/base.component");

class ProgressBarComponent extends BaseComponent {
  constructor() {
    super(".container-fluid");
  }

  get reLoad() {
    return this.rootEl.$("#reLoad");
  }
}

module.exports = ProgressBarComponent;
