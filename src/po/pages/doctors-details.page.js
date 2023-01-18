const BasePage = require("./base.page");
const { DeleteDoctorModal, DoctorsDetailsHeader } = require("../components");

class DoctorsDetailsPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/doctor-details/5");
    this.deleteDoctorModal = new DeleteDoctorModal();
    this.doctorsDetailsHeader = new DoctorsDetailsHeader();
  }
}

module.exports = DoctorsDetailsPage;
