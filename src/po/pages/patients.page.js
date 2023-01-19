const BasePage = require("./base.page");
const { PatientsListHeader, AddPatientsModal, SearchPatient } = require("../components");

class PatientsPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/patients");
    this.addPatientsModal = new AddPatientsModal();
    this.patientsListHeader = new PatientsListHeader();
    this.searchPatient = new SearchPatient();
  }
}

module.exports = PatientsPage;
