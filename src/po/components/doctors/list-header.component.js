const BaseComponent = require("../common/base.component");

class ListHeaderComponent extends BaseComponent {
  constructor() {
    super(".specialization-types");
  }

  get addNewDoctorBtn() {
    return this.rootEl.$("button.e-control");
  }

  get deletedAppointmentValidation() {
    return this.rootEl.$("//div[@id='Specialist_5']");
  }
}

module.exports = ListHeaderComponent;
