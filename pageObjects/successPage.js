var EC = protractor.ExpectedConditions;

var successPage = require("../locators/successPage.json");

module.exports = {
    verifyHeader: function() {
        browser.wait(EC.visibilityOf(element(by.css(successPage.lblHeader))), 10000);
        expect(element(by.css(successPage.lblHeader)).getText()).toEqual('Finish');
    },

    verifyTitle: function() {
        browser.wait(EC.visibilityOf(element(by.css(successPage.lblTitle))), 10000);
        expect(element(by.css(successPage.lblTitle)).getText()).toEqual('THANK YOU FOR YOUR ORDER');
    },

    verifySubTitle: function() {
        browser.wait(EC.visibilityOf(element(by.css(successPage.lblSubTitle))), 10000);
        expect(element(by.css(successPage.lblSubTitle)).getText()).toEqual('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
}


