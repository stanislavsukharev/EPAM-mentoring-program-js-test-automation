describe('Patients test suite', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients');
  });

  it('search patient', async () => {
    const searchPatient = await $("//input[@id='schedule_searchbar']");
    const magnifyingGlass = await $("//span[@id='schedule_searchbutton']");

    await searchPatient.click();
    await searchPatient.setValue('Mercy');
    await magnifyingGlass.click();

    const emailValidation = await $("//span[text()='Mercy']");
    expect(await emailValidation.getText()).toEqual('Mercy');
  });
  
  it('add new patient', async () => {
    const addNewPatientButton = await $("//button[text()='Add New Patient']");
    const inputPatientName = await $("//input[@name='Name']");
    const inputMobileNumber = await $("//input[@id='PatientMobile']");
    const inputEmail = await $("//input[@name='Email']");
    const saveButton = await $("//button[text()='Save']");

    await addNewPatientButton.click();
    await inputPatientName.click();
    await inputPatientName.setValue('Mister Twister');
    await inputMobileNumber.click();
    await inputMobileNumber.setValue('(333) 333-3333');
    await inputEmail.setValue('mister@twister.com');
    await saveButton.click();

    const newEntryValidation = await $("//span[text()='Mister Twister']")
    expect(await newEntryValidation).toBeClickable()
  })
});   

describe('Calendar appointment test', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar');
  });

  it('add appointment', async () => {
    const appointment = await $('[data-date="1596340800000"]');
    const inputPatientName = await $("//input[@id='PatientName']");
    const symptomField = await $("//textarea[@name='Symptoms']");
    const saveAppointmentButton = await $(".e-event-save");

    await appointment.doubleClick();
    await inputPatientName.setValue('Milka'); 
    await symptomField.setValue('bipolar disorder');
    await saveAppointmentButton.click();

    const newAppointmentValidation = await $('[aria-label="Milka Begin From Sunday, August 2, 2020 at 8:00:00 AM GMT+04:00 Ends At Sunday, August 2, 2020 at 8:30:00 AM GMT+04:00"]');     
    expect(await newAppointmentValidation).toHaveTextContaining('Milka');
    });
});   

describe('Doctors test', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
  });

  it('delete doctors entry', async () => {
    const doctorsEntry = await $("//div[@id='Specialist_7']");
    const deleteDoctorButton = await $("//button[text()='Delete']")
    const deleteDoctorButtonOk = await $("//button[text()='Ok']")
    const doctorsButton = await $("//span[text()='Doctors']")
    
    await doctorsEntry.click();
    await deleteDoctorButton.click();
    await deleteDoctorButtonOk.click();
    await doctorsButton.click();
    
    const deletedEntryValidation = await $("//div[@id='Specialist_7']")
    expect(await deletedEntryValidation).toExist()
    });
});   

//TASK2 - Basic commands

describe('Basic commands doctors', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
  });

  it('add new doctor', async () => {
    const addNewDoctorButton = await $("//button[text()='Add New Doctor']");
    const addNewDoctorModalWindow = await $(".new-doctor-dialog");
    const inputDoctorName = await $("//input[@name='Name']");
    const inputMobileNumber = await $("//input[@id='DoctorMobile']");
    const inputEmail = await $("//input[@name='Email']");
    const saveButton = await $("//button[text()='Save']");

    
    await addNewDoctorButton.waitForDisplayed();
    await addNewDoctorButton.click();
    await addNewDoctorModalWindow.isDisplayed();
    await inputDoctorName.setValue('Wednesday Addams');
    await inputMobileNumber.setValue('(666) 666-6666');
    await inputEmail.setValue('wednesday@addams.com');
    await saveButton.click();
  });
});   

describe('Basic commands calendar', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar');
  });

  it('delete appointment', async () => {
    const appointment = await $('[aria-label="Mercy Begin From Sunday, August 2, 2020 at 10:00:00 AM GMT+04:00 Ends At Sunday, August 2, 2020 at 11:00:00 AM GMT+04:00"]');
    const modalWindow = await $(".quick-info-title");
    
    await appointment.waitForDisplayed();
    await appointment.click();
    await modalWindow.waitForExist();
  });
});   

describe('Basic commands preferences', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/preference');
  });

  it('change preferences', async () => {
   const deafultViewDropdown = await $('//span[@aria-owns="CurrentView_options"]');
   const changeDeafultViewOption = await $('//input[@aria-label="Weekly"]');

   await deafultViewDropdown.isExisting();
   await deafultViewDropdown.click();
   await changeDeafultViewOption.isExisting();
  });
});   

describe('Basic commands patients', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients');
  });

  it('search patient', async () => {
    const searchPatient = await $("//input[@id='schedule_searchbar']");
    const magnifyingGlass = await $("//span[@id='schedule_searchbutton']");

    await searchPatient.isDisplayed();
    await searchPatient.click();
    await searchPatient.setValue('Maud');
    await searchPatient.addValue(' Oliver');
    await magnifyingGlass.isExisting();
    await magnifyingGlass.click();
  });
});