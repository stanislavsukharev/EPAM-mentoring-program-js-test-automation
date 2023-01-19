const BasePage = require("./base.page");
const { AddAppointmentModal, AddNewAppointment, DeleteAppointmentModal, DeleteConfirmation } = require("../components");

class CalendarPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/calendar");
    this.addNewAppointment = new AddNewAppointment();
    this.addAppointmentModal = new AddAppointmentModal();
    this.deleteAppointmentModal = new DeleteAppointmentModal();
    this.deleteConfirmation = new DeleteConfirmation();
  }
}

module.exports = CalendarPage;
