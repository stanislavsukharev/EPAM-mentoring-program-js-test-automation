const BaseComponent = require("../common/base.component");

class DeleteDoctorComponent extends BaseComponent {
  constructor() {
    super(".doctor-detail");
  }

  get deleteDocBtn() {
    return this.rootEl.$("//button[text()='Delete']");
  }

  get deleteDocOkBtn() {
    return this.rootEl.$("//button[text()='Ok']");
  }
}

module.exports = DeleteDoctorComponent;
