const BasePage = require("./base.page");
const { SideMenu, DashMain } = require("../components");

class DashboardPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/dashboard");
    this.sideMenu = new SideMenu();
    this.dashMain = new DashMain();
  }
}

module.exports = DashboardPage;
