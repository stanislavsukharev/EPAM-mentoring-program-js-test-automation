const { Given, When } = require('@wdio/cucumber-framework');
const { page } = require('../po');

Given('I open {string} page', function(pageName) {
  return page(pageName).open();
});

//@1
When('I type {string} in the search field', function(name) {
  return page("patients").patientsListHeader.searchPatient.setValue(name);
});

//@2
When('I click on the add new patient button from list header', function() {
  return page("patients").patientsListHeader.addNewPatientButton.click();
});

When('I type {string} in the {string} field', function(name, fieldName) {
  return page("patients").addPatientsModal.input(fieldName).setValue(name);
});

When('I click on the save button', function() {
  return page("patients").addPatientsModal.saveButton.click();
});
