const { page } = require("../po");

describe("Patients test suite", () => {
  beforeEach(async () => {
    await page("patients").open();
  });

  it("search patient", async () => {
    await page("patients").patientsListHeader.searchPatient.customClick();
    await page("patients").patientsListHeader.searchPatient.setValue("Mercy");

    await expect(
      page("patients").patientsListHeader.patientNewValidation
    ).toBeClickable();
  });

  it("add new patient", async () => {
    await page("patients").patientsListHeader.addNewPatientButton.click();
    await page("patients")
      .addPatientsModal.input("name")
      .setValue("Mister Twister");
    await page("patients")
      .addPatientsModal.input("phone")
      .setValue("(333) 333-3333");
    await page("patients")
      .addPatientsModal.input("email")
      .setValue("mister@twister.com");
    await page("patients").addPatientsModal.saveButton.click();

    await expect(page("patients").addPatientsModal.rootEl).not.toBeDisplayed();
  });
});

describe("Calendar appointment test", () => {
  it("add appointment", async () => {
    await page("schedule").open();

    await page("schedule").addNewAppointment.newAppointment.doubleClick();
    await page("schedule").addAppointmentModal.input("name").setValue("Milka");
    await page("schedule")
      .addAppointmentModal.input("symptom")
      .setValue("bipolar disorder");
    await page("schedule").addAppointmentModal.saveBtn.click();

    await expect(page("schedule").addNewAppointment.newAppointment).toExist();
  });
});

describe("Basic commands doctors", () => {
  it("add new doctor", async () => {
    await page("doctors").open();

    await page("doctors").doctorListHeader.addNewDoctorBtn.click();
    await expect(page("doctors").addDoctorModal.rootEl).toBeDisplayed();

    await page("doctors")
      .addDoctorModal.input("name")
      .setValue("Wednesday Addams");
    await page("doctors")
      .addDoctorModal.input("phone")
      .setValue("(666) 666-6666");
    await page("doctors")
      .addDoctorModal.input("email")
      .setValue("wednesday@addams.com");
    await page("doctors")
      .addDoctorModal.input("education")
      .setValue("Nevermore Academy");
    await page("doctors")
      .addDoctorModal.input("designation")
      .setValue("Witchcraft");

    await page("doctors").addDoctorModal.saveBtn.click();
    await expect(page("doctors").addDoctorModal.rootEl).not.toBeDisplayed();
    await expect(page("doctors").specialistCard(8).name).toHaveTextContaining(
      "Wednesday Addams"
    );
    await expect(
      page("doctors").specialistCard(8).education
    ).toHaveTextContaining("Nevermore Academy", {
      ignoreCase: true,
    });
  });
});

describe("Doctors test", () => {
  it("delete doctors entry", async () => {
    await page("doctorsdetails").open();

    await page("doctorsdetails").doctorsDetailsHeader.deleteDocBtn.click();
    await page("doctorsdetails").deleteDoctorModal.deleteDocOkBtn.click();
    await page("doctorsdetails").sideMenu.item("doctors").click();

    await expect(
      page("doctors").doctorListHeader.deletedAppointmentValidation
    ).not.toBeDisplayed();
  });
});

describe("Basic commands calendar", () => {
  beforeEach(async () => {
    await page("schedule").open();
  });

  it("delete appointment", async () => {
    await page("schedule").addNewAppointment.appointmentDelete.doubleClick();
    await page("schedule").deleteAppointmentModal.deleteBtn.customClick();
    await page(
      "schedule"
    ).deleteAppointmentModal.deleteBtnConfirmation.customClick();
    await expect(
      page("schedule").addNewAppointment.appointmentDelete
    ).not.toBeDisplayed();
  });
});

describe("Basic commands patients", () => {
  it("search patient", async () => {
    await page("patients").open();

    await page("patients").patientsListHeader.searchPatient.customClick();
    await page("patients").patientsListHeader.searchPatient.setValue("Maud");
    await page("patients").patientsListHeader.searchPatient.addValue(" Oliver");

    await expect(
      page("patients").patientsListHeader.patientValidation
    ).toBeClickable();
  });
});

// TASK3 - Advanced commands
describe("adding css style", () => {
  it("execute()", async () => {
    await page("dashboard").open();

    await browser.execute(function () {
      const element = document.querySelector(".clinic-name");
      element.style.color = "indigo";
      element.style.border = "orange solid 4px";
    });
    await expect(
      page("dashboard").dashMain.newElementValidation.toExist());
  });
});

describe("progress bar semi circular", () => {
  it("waitUntil()", async () => {
    await page("semi").open();
    await page("semi").progressBar.reLoad.customClick();
    await browser.waitUntil(
      async () => (await $("#point1").getText()) === "100%",
      {
        timeout: 7000,
        interval: 600,
        timeoutMsg: "not loaded",
      }
    );
    const pointValidation = await $("#point1");
    expect(await pointValidation.getText()).toEqual("100%");
  });
});

describe("actions", () => {
  it("mouse move", async () => {
    await page("patients").open();
    await page("patients").patientsWrapper.firstRow.moveTo();
    await expect(page("patients").patientsWrapper.firstRow.isFocused());
  });

  it("selecting multiple cells", async () => {
    await page("schedule").open();

    const SHIFT = "\uE008";
    await page("schedule").addNewAppointment.slot1.customClick();
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [
          {
            type: "keyDown",
            value: SHIFT,
          },
        ],
      },
    ]);
    await page("schedule").addNewAppointment.slot2.customClick();
    await browser.pause(500);
    await browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [
          {
            type: "keyUp",
            value: SHIFT,
          },
        ],
      },
    ]);
    await browser.releaseActions();
    await expect(page("schedule").addNewAppointment.slotValidationFirst.isFocused());
    await expect(page("schedule").addNewAppointment.slotValidationLast.isFocused());
   });
});

//bonus task
describe("set cookies", () => {
  it("setCookies()", async () => {
    await page("doctors").open();

    await browser.setCookies([
      {
        name: "helloIamTheCookie",
        value: "69",
      },
    ]);
    const testCookie = await browser.getCookies(["helloIamTheCookie"]);
    expect(await testCookie).toHaveValueContaining([
      {
        name: "helloIamTheCookie",
        value: "69",
      },
    ]);
  });
});
