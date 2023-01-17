const BaseComponent = require("../common/base.component");

class PatientsHeaderComponent extends BaseComponent {
  constructor() {
    super(".patient-operations");
  }

  get addNewPatientButton() {
    return this.rootEl.$("//button[text()='Add New Patient']");
  }
}

module.exports = PatientsHeaderComponent;
