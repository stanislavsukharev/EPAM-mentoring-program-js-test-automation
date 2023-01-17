const BasePage = require("./base.page");
const {
  AddDoctorModal,
  DoctorListHeader,
  SpecialistCard,
} = require("../components");

class SemiPage extends BasePage {
  constructor() {
    super("/react/demos/progress-bar/semi-circular");
    this.addDoctorModal = new AddDoctorModal();
    this.doctorListHeader = new DoctorListHeader();
  }
}

module.exports = SemiPage;
