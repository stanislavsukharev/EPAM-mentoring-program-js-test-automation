const BasePage = require("./base.page");
const { ProgressBar } = require("../components");
class SemiPage extends BasePage {
  constructor() {
    super("/react/demos/progress-bar/semi-circular");
    this.progressBar = new ProgressBar();
  }
}

module.exports = SemiPage;
