const BasePage = require("./base.page");
const { PatientsListHeader, AddPatientsModal } = require("../components");

class PatientsPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/patients");
    this.addPatientsModal = new AddPatientsModal();
    this.patientsListHeader = new PatientsListHeader();
  }
}

module.exports = PatientsPage;
