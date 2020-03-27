var EC = protractor.ExpectedConditions;
var landingPage = require("../locators/landingPage.json");
var homePage = require("../locators/homePage.json");


module.exports = {
    navigateToPage: function() {
        browser.get('https://www.saucedemo.com/index.html');
        browser.wait(EC.visibilityOf(element(by.css(landingPage.txtUsername))), 10000);
    },

    enterUserName: function() {
        browser.wait(EC.visibilityOf(element(by.css(landingPage.txtUsername))), 10000);
        element(by.css(landingPage.txtUsername)).clear().sendKeys('standard_user');
    },

    enterPassword: function() {
        browser.wait(EC.visibilityOf(element(by.css(landingPage.txtPassword))), 10000);
        element(by.css(landingPage.txtPassword)).clear().sendKeys('secret_sauce');
    },

    clickLogin: function() {
        browser.wait(EC.visibilityOf(element(by.css(landingPage.btnLogin))), 10000);
        element(by.css(landingPage.btnLogin)).click();
    },

    verifyHomepage: function() {
        browser.wait(EC.visibilityOf(element(by.css(homePage.icnShoppingCart))), 10000);
    }
};