var EC = protractor.ExpectedConditions;

var checkoutInformationPage = require("../locators/checkoutInformationPage.json");

module.exports = {
    enterFirstName: function() {
        browser.wait(EC.visibilityOf(element(by.css(checkoutInformationPage.txtFirstName))), 10000);
        element(by.css(checkoutInformationPage.txtFirstName)).clear().sendKeys('Ross'); 
    },

    enterLastname: function() {
        browser.wait(EC.visibilityOf(element(by.css(checkoutInformationPage.txtLastName))), 10000);
        element(by.css(checkoutInformationPage.txtLastName)).clear().sendKeys('Bendal'); 
    },

    enterZipCode: function() {
        browser.wait(EC.visibilityOf(element(by.css(checkoutInformationPage.txtPostalCode))), 10000);
        element(by.css(checkoutInformationPage.txtPostalCode)).clear().sendKeys('1234'); 
    },

    clickContinue: function() {
        browser.wait(EC.visibilityOf(element(by.css(checkoutInformationPage.btnContinue))), 10000);
        element(by.css(checkoutInformationPage.btnContinue)).click();
    }
}