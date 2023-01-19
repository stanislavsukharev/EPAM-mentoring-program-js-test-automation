const BaseComponent = require("../common/base.component");

class DeleteAppointmentComponent extends BaseComponent {
  constructor() {
    super("#_dialog_wrapper");
  }

  get deleteBtn() {
    return this.rootEl.$(
      "button[class*='e-event-delete']"
      
    );
  }

  get deleteBtnConfirmation() {
    return this.rootEl.$("//button[@aria-label='Delete']");
  }
}

module.exports = DeleteAppointmentComponent;
