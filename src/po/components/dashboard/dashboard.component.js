const BaseComponent = require("../common/base.component");

class DashboardComponent extends BaseComponent {
  constructor() {
    super("#dashboard");
  }

  get newElementValidation() {
    return this.rootEl.$("//h1[@style='color: indigo; border: 4px solid orange']");
  }
}

module.exports = DashboardComponent;