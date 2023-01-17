const BasePage = require("./base.page");
const {
  AddDoctorModal,
  DoctorListHeader,
  SpecialistCard,
} = require("../components");

class CalendarPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/calendar");
    this.addDoctorModal = new AddDoctorModal();
    this.doctorListHeader = new DoctorListHeader();
  }

  specialistCard(id) {
    return new SpecialistCard(id);
  }
}

module.exports = CalendarPage;
