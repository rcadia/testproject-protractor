var EC = protractor.ExpectedConditions;

var cartPage = require("../locators/cartPage.json");
var checkoutInformationPage = require("../locators/checkoutInformationPage.json");


module.exports = {

    clickCheckout: function() {
        browser.wait(EC.visibilityOf(element(by.css(cartPage.btnCheckout))), 10000);
        element(by.css(cartPage.btnCheckout)).click();
        browser.wait(EC.visibilityOf(element(by.css(checkoutInformationPage.btnContinue))), 10000);
    },

    verifyProductsAddedInCart: function(locator, text){
        browser.wait(EC.visibilityOf(element(by.xpath(locator))), 10000);
        expect(element(by.xpath(locator)).getText()).toEqual(text);
    }
};