const VlAccessibility = require('../components/vl-accessibility');
const {Page, Config} = require('vl-ui-core').Test;

class VlAccessibilityPage extends Page {
  async _getAccessibility(selector) {
    return new VlAccessibility(this.driver, selector);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-accessibility.html');
  }
}

module.exports = VlAccessibilityPage;
