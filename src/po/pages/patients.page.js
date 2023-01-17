const BasePage = require("./base.page");
const { PatientsListHeader, AddPatientModal } = require("../components");

class PatientsPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/patients");
    this.addPatientModal = new AddPatientModal();
    this.patientsListHeader = new PatientsListHeader();
  }
}

module.exports = PatientsPage;
