const { Given, When } = require('@wdio/cucumber-framework');
const { page } = require('../po');

Given('I open {string} page', function(pageName) {
  return page(pageName).open();
});

//@1
When('I type the name', function() {
  return page("patients").patientsListHeader.searchPatient.setValue("Mercy");
});

//@2
When('I click add new patient button from list header', function() {
  return page("patients").patientsListHeader.addNewPatientButton.click();
});

When('I type <name> in the name field', function() {
  return page("patients").addPatientsModal.input('name').setValue('<name>');
});

When('I click save button', function() {
  return page("patients").addPatientsModal.saveButton.click();
});



