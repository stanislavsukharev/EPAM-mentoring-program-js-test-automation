const { Then } = require("@wdio/cucumber-framework");
const { page } = require('../po');

//@1
Then('the patient entry should be displayed', function() {
  return page("patients").patientsListHeader.patientNewValidation.isDisplayed();
});

//@2
Then('new patient modal window should be displayed', function() {
  return page("patients").addPatientsModal.rootEl.not.toBeDisplayed();
});