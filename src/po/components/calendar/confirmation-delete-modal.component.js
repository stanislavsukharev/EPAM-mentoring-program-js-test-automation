const BaseComponent = require("../common/base.component");

class DeleteConfirmationComponent extends BaseComponent {
  constructor() {
    super("#QuickDialog");
  }

  get deleteBtnConfirmation() {
    return this.rootEl.$(
      "button[class*='e-quick-dialog-delete']"
    );
  }
}

module.exports = DeleteConfirmationComponent;
