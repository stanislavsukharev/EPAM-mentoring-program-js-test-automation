const BaseComponent = require("../common/base.component");

class DeleteConfirmationComponent extends BaseComponent {
  constructor() {
    super("#QuickDialog");
  }

  get deleteBtnConfirmation() {
    return this.rootEl.$(
      ".e-footer-content button.e-control.e-btn.e-lib.e-quick-alertok.e-flat.e-primary.e-quick-dialog-delete"
    );
  }
}

module.exports = DeleteConfirmationComponent;
