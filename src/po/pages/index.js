const CalendarPage = require("./calendar.page");
const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");
const PatientsPage = require("./patients.page");
const SemiPage = require("./semi-circular.page");
const DoctorsDetailsPage = require("./doctors-details.page");

/**
 * @param name {'dashboard' | 'doctors' | 'patients' | 'schedule' | 'semi' | 'doctorsdetails'}
 * @returns {DashboardPage|DoctorsPage|PatientsPage|CalendarPage|SemiPage|DoctorsDetailsPage}
 */
function page(name) {
  const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
    patients: new PatientsPage(),
    schedule: new CalendarPage(),
    semi: new SemiPage(),
    doctorsdetails: new DoctorsDetailsPage(),
  };
  return items[name.toLowerCase()];
}

module.exports = {
  DashboardPage,
  DoctorsPage,
  PatientsPage,
  CalendarPage,
  SemiPage,
  DoctorsDetailsPage,
  page,
};
