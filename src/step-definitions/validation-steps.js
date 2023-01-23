const { Then } = require("@wdio/cucumber-framework");
const { page } = require('../po');

//@1
Then('the patient entry should be displayed', function() {
  return expect(page("patients").patientsListHeader.patientNewValidation).toBeClickable();
});

//@2
Then('the new patient entry should be displayed', function() { 
  return expect(page("patients").patientsListHeader.patientOutlineValidation).toBeDisplayed();
});
