const BaseComponent = require("../common/base.component");

class AddAppointmentComponent extends BaseComponent {
  constructor() {
    super(".e-schedule-dialog");
  }

  get saveBtn() {
    return this.rootEl.$(".e-event-save");
  }

  /**
   * @param name {'name' | 'symptom' }
   */
  input(name) {
    const selectors = {
      name: "//input[@id='PatientName']",
      symptom: "//textarea[@name='Symptoms']",
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = AddAppointmentComponent;
