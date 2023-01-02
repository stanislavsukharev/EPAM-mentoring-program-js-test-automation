//const { customClick } = require('../customClick');
import allureReporter from '@wdio/allure-reporter';
import junit from "junit";

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
      expect(await emailValidation).toExist();
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
  it('add appointment', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar');
    const appointment = await $('[data-date="1596340800000"]');
    const inputPatientName = await $("//input[@id='PatientName']");
    const symptomField = await $("//textarea[@name='Symptoms']");
    const saveAppointmentButton = await $(".e-event-save");

    await appointment.doubleClick();
    await inputPatientName.setValue('Milka'); 
    await symptomField.setValue('bipolar disorder');
    await saveAppointmentButton.click();

    const newAppointmentValidation = await $("//div[@data-id='Appointment_1092']");     
    expect(await newAppointmentValidation).toExist();
    });
});   

describe('Doctors test', () => {
  it('delete doctors entry', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    const doctorsEntry = await $("//div[@id='Specialist_7']");
    const deleteDoctorButton = await $("//button[text()='Delete']");
    const deleteDoctorButtonOk = await $("//button[text()='Ok']");
    const doctorsButton = await $("//span[text()='Doctors']");
    
    await doctorsEntry.click();
    await deleteDoctorButton.click();
    await deleteDoctorButtonOk.click();
    await doctorsButton.click();
    
    const deletedEntryValidation = await $("//div[@id='Specialist_7']");
    expect(await deletedEntryValidation).toExist();
    });
});   

//TASK2 - Basic commands
describe('Basic commands doctors', () => {
  it('add new doctor', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
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

    const newDoctorEntryValidation = await $("//div[@id='Specialist_8']");
    expect(await newDoctorEntryValidation).toExist();
  });
});   

describe('Basic commands calendar', () => {
  beforeEach(async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar');
  });

  it('delete appointment', async () => {
    const appointment = await $("//div[@data-id='Appointment_1002']");
    const deleteButton = await $("//button[@title='Delete']");
    const deleteButtonConfirm = await $("//button[@aria-label='Delete']");

    await appointment.click();
    await deleteButton.click();
    await deleteButtonConfirm.click();
    
    const deletedAppointmentValidation = await $("//div[@data-id='Appointment_1002']");     
    expect(await deletedAppointmentValidation).toExist();
  });

  it('add appointment', async () => {
    const appointment = await $('[data-date="1596686400000"]');
    const inputPatientName = await $("//input[@id='PatientName']");
    const symptomField = await $("//textarea[@name='Symptoms']");
    const saveAppointmentButton = await $(".e-event-save");

    await appointment.doubleClick();
    await inputPatientName.setValue('Adams'); 
    await symptomField.setValue('Schizophrenia');
    await saveAppointmentButton.click();

    const newAppointmentValidation = await $("//div[@data-id='Appointment_1030']");     
    expect(await newAppointmentValidation).toExist();
    });
});   

describe('Basic commands patients', () => {
  it('search patient', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients');
    const searchPatient = await $("//input[@id='schedule_searchbar']");
    const magnifyingGlass = await $("//span[@id='schedule_searchbutton']");

    await searchPatient.isDisplayed();
    await searchPatient.click();
    await searchPatient.setValue('Maud');
    await searchPatient.addValue(' Oliver');
    await magnifyingGlass.isExisting();
    await magnifyingGlass.click();

    const PatientValidation = await $("//span[text()='Maud Oliver']");
    expect(await PatientValidation).toBeClickable();
  });
});

//TASK3 - Advanced commands
describe('execute', () => {
  it('execute()', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    await browser.execute(function () {
      const element = document.querySelector(".clinic-name");
      element.style.color = 'indigo';
      element.style.border = 'orange solid 4px';
    });
  });
});

describe('waitUntil', () => {
  it('waitUntil()', async () => {
    await browser.url('https://ej2.syncfusion.com/react/demos/progress-bar/semi-circular/');
    await $('#reLoad').click();
    await browser.waitUntil(async () => (await $('#point1').getText()) === '100%', {
      timeout: 7000,
      interval: 600,
      timeoutMsg: 'not loaded',
    });
  });
});

describe('actions', () => {
  it('mouse move', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients');
    const firstRow = await $('div.e-responsive-header table[role=grid] tbody tr:first-child');
    await firstRow.moveTo();
  });

  it('perform actions', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar');
    const slot1 = await $("[data-date='1596340800000']");
    const slot2 = await $("[data-date='1596382200000']");
    const SHIFT = '\uE008';
    await slot1.click();
    await browser.performActions([
      {
        type: 'key',
        id: 'keyboard',
        actions: [
          {
            type: 'keyDown',
            value: SHIFT,
          },
        ],
      },
    ]);
    await slot2.click();
    await browser.pause(500);
    await browser.performActions([
      {
        type: 'key',
        id: 'keyboard',
        actions: [
          {
            type: 'keyUp',
            value: SHIFT,
          },
        ],
      },
    ]);
    await browser.releaseActions();
  });
});

//bonus task
describe('cookies', () => {
  it('setCookies()', async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    await browser.setCookies([
      {
        name: 'helloIamTheCookie',
        value: '69',
      },
    ]);

    const testCookie = await browser.getCookies(['helloIamTheCookie']);
    console.log(testCookie); 
    expect (await testCookie).toEqual([{
          "domain": "ej2.syncfusion.com",
          "httpOnly": false,
          "name": "helloIamTheCookie",
          "path": "/",
          "secure": true,
          "value": "69",
    }])
  });
});
