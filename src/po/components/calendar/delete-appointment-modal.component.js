const BaseComponent = require("../common/base.component");

class DeleteAppointmentComponent extends BaseComponent {
  constructor() {
    super("#_dialog_wrapper");
  }

  get deleteBtn() {
    return this.rootEl.$(
      ".e-footer-content button.e-control.e-btn.e-lib.e-event-delete.e-flat"
    );
  }

  get deleteBtnConfirmation() {
    return this.rootEl.$("//button[@aria-label='Delete']");
  }
}

module.exports = DeleteAppointmentComponent;
