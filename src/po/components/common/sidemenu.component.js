const BaseComponent = require("./base.component");

class SideMenuComponent extends BaseComponent {
  constructor() {
    super("#plannerSiderBar");
  }

  get name() {
    return this.rootEl.$("p.name");
  }

  /**
   * @param name {'dashboard' | 'schedule' | 'doctors' | 'patients' | 'semi' | 'docdetails'}
   */
  item(name) {
    const selectors = {
      dashboard: '[routerlink="/dashboard"]',
      schedule: '[routerlink="/calendar"]',
      doctors: '[routerlink="/doctors"]',
      patients: '[routerlink="/patients"]',
      semi: '[routerlink="/semi-circular"]',
      docdetails: '[routerlink="/docdetails"]',
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = SideMenuComponent;
