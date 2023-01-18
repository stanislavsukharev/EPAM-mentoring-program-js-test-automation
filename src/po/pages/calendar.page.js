const BasePage = require("./base.page");
const {
  AddAppointmentModal,
  AddNewAppointment,
  DeleteAppointmentModal,
  DeleteConfirmationComponent,
} = require("../components");

class CalendarPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/calendar");
    this.addNewAppointment = new AddNewAppointment();
    this.addAppointmentModal = new AddAppointmentModal();
    this.deleteAppointmentModal = new DeleteAppointmentModal();
    this.deleteConfirmationComponent = new DeleteConfirmationComponent();
  }
}

module.exports = CalendarPage;
