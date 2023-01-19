const BaseComponent = require("../common/base.component");

class NewAppointmentComponent extends BaseComponent {
  constructor() {
    super(".e-content-wrap");
  }

  get newAppointment() {
    return this.rootEl.$('[data-date="1596340800000"]');
  }

  get appointmentDelete() {
    return this.rootEl.$("//div[@data-id='Appointment_1002']");
  }

  get newAppointmentValidation() {
    return this.rootEl.$("//div[@data-id='Appointment_1092']");
  }
}

module.exports = NewAppointmentComponent;
