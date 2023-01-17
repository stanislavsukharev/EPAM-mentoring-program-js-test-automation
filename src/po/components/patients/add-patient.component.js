const BaseComponent = require("../common/base.component");

class AddPatientComponent extends BaseComponent {
  constructor() {
    super(".new-patient-dialog");
  }

  get saveButton() {
    return this.rootEl.$("//button[text()='Save']");
  }

  /**
   * @param name {'name' | 'phone' | 'email'}
   */
  input(name) {
    const selectors = {
      name: "//input[@name='Name']",
      phone: "//input[@id='PatientMobile",
      email: "//input[@name='Email']",
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = AddPatientComponent;
