const Header = require("./common/header.component");
const SideMenu = require("./common/sidemenu.component");

const AddDoctorModal = require("./doctors/add-doctor.component");
const DoctorListHeader = require("./doctors/list-header.component");
const SpecialistCard = require("./doctors/specialist-card.component");

const DeleteDoctorModal = require("./doctors/doctors-details.component");
const DoctorsDetailsHeader = require("./doctors/doctors-details.component");

const PatientsListHeader = require("./patients/patients-list-header.component");
const AddPatientsModal = require("./patients/add-patient.component");
const SearchPatient = require("./patients/search-patient.component");

const AddNewAppointment = require("./calendar/new-appointment.component");
const AddAppointmentModal = require("./calendar/add-appointment-modal.component");
const DeleteAppointmentModal = require("./calendar/delete-appointment-modal.component");
const DeleteConfirmationComponent = require("./calendar/confirmation-delete-modal.component");

module.exports = {
  Header,
  SideMenu,
  AddDoctorModal,
  DoctorListHeader,
  SpecialistCard,
  PatientsListHeader,
  AddPatientsModal,
  SearchPatient,
  AddAppointmentModal,
  AddNewAppointment,
  DeleteDoctorModal,
  DoctorsDetailsHeader,
  DeleteAppointmentModal,
  DeleteConfirmationComponent,
};
