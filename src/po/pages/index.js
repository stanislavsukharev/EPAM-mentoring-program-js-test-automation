const CalendarPage = require("./calendar.page");
const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");
const PatientsPage = require("./patients.page");
const SemiPage = require("./semi-circular.page");

/**
 * @param name {'dashboard' | 'doctors' | 'patients' | 'schedule' | 'semi'}
 * @returns {DashboardPage|DoctorsPage|PatientsPage|CalendarPage|SemiPage}
 */
function page(name) {
  const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
    patients: new PatientsPage(),
    schedule: new CalendarPage(),
    semi: new SemiPage(),
  };
  return items[name.toLowerCase()];
}

module.exports = {
  DashboardPage,
  DoctorsPage,
  PatientsPage,
  CalendarPage,
  SemiPage,
  page,
};
