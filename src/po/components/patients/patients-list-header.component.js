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

  get patientValidation() {
    return this.rootEl.$("//span[text()='Maud Oliver']");
  }

  get patientNameValidation() {
    return this.rootEl.$(
      ".e-rowcell.e-templatecell.e-selectionbackground.e-active.e-focus .patient-name"
    );
  }
}

module.exports = PatientsHeaderComponent;
