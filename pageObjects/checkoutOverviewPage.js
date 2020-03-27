var EC = protractor.ExpectedConditions;

var checkoutOverviewPage = require("../locators/checkoutOverviewPage.json");


module.exports = {
    verifyPage: function() {
        browser.wait(EC.visibilityOf(element(by.css(checkoutOverviewPage.lblSubheader))), 10000);
        expect(element(by.css(checkoutOverviewPage.lblSubheader)).getText()).toEqual('Checkout: Overview');
    },

    clickFinish: function() {
        browser.wait(EC.visibilityOf(element(by.css(checkoutOverviewPage.btnFinish))), 10000);
        element(by.css(checkoutOverviewPage.btnFinish)).click();
    }
}


