const Header = require("./common/header.component");
const SideMenu = require("./common/sidemenu.component");

const AddDoctorModal = require("./doctors/add-doctor.component");
const DoctorListHeader = require("./doctors/list-header.component");
const SpecialistCard = require("./doctors/specialist-card.component");

const PatientsListHeader = require("./patients/patients-list-header.component");
const AddPatientsModal = require("./patients/add-patient.component");
const SearchPatient = require("./patients/search-patient.component");
const mailValidation = require("./patients/search-patient.component");

module.exports = {
  Header,
  SideMenu,
  AddDoctorModal,
  DoctorListHeader,
  SpecialistCard,
  PatientsListHeader,
  AddPatientsModal,
  SearchPatient,
  mailValidation,
};
