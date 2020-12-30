const VlAccessibility = require('../components/vl-accessibility');
const {Page, Config} = require('vl-ui-core').Test;

class VlAccessibilityPage extends Page {
  async getAccessibilityElement() {
    return this._getAccessibility('vl-accessibility');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-accessibility.html');
  }

  async _getAccessibility(selector) {
    return new VlAccessibility(this.driver, selector);
  }
}

module.exports = VlAccessibilityPage;
