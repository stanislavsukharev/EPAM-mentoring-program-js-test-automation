const BaseComponent = require("../common/base.component");

class PatientsHeaderComponent extends BaseComponent {
  constructor() {
    super(".patient-operations");
  }

  get addNewPatientButton() {
    return this.rootEl.$("//button[text()='Add New Patient']");
  }

  get searchPatient() {
    return this.rootEl.$("//input[@id='schedule_searchbar']");
  }
}

module.exports = PatientsHeaderComponent;
