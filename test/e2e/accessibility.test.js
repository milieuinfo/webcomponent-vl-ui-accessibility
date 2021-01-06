const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlAccessibilityPage = require('./pages/vl-accessibility.page');

describe('vl-accessibility', async () => {
  let vlAccessibilityPage;

  before(() => {
    vlAccessibilityPage = new VlAccessibilityPage(getDriver());
    return vlAccessibilityPage.load();
  });

  it('als gebruiker kan in de toegankelijkheid pagina zien', async () => {
    const page = await vlAccessibilityPage.getAccessibilityElement();
    await assert.eventually.isTrue(page.isDisplayed());
  });
});
