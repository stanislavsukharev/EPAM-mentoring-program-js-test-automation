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

  get slot1() {
    return this.rootEl.$("[data-date='1596340800000']");
  }

  get slot2() {
    return this.rootEl.$("[data-date='1596342600000']");
  }

  get slotValidationFirst() {
    return this.rootEl.$("[data-date='1596340800000']");
  }

  get slotValidationLast() {
    return this.rootEl.$("[data-date='1596342600000']");
  }
}

module.exports = NewAppointmentComponent;
