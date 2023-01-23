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

  get patientNewValidation() {
    return this.rootEl.$("//span[text()='Mercy']");
  }

  get firstRow() {
    return this.rootEl.$("div.e-responsive-header table[role=grid] tbody tr:first-child");
  }

  get patientOutlineValidation() {
    return this.rootEl.$("//span[contains(text(),'Pios')]");
  }  
}

module.exports = PatientsHeaderComponent;
