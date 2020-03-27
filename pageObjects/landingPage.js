var EC = protractor.ExpectedConditions;

module.exports = {
    navigateToPage: function() {
        browser.get('https://www.saucedemo.com/index.html');
        browser.wait(EC.visibilityOf(element(by.css("[data-test='username']"))), 10000);
    },

    enterUserName: function() {
        browser.wait(EC.visibilityOf(element(by.css("[data-test='username']"))), 10000);
        element(by.css("[data-test='username']")).clear().sendKeys('standard_user');
    },

    enterPassword: function() {
        browser.wait(EC.visibilityOf(element(by.css("[data-test='password']"))), 10000);
        element(by.css("[data-test='password']")).clear().sendKeys('secret_sauce');
    },

    clickLogin: function() {
        browser.wait(EC.visibilityOf(element(by.css("[value='LOGIN']"))), 10000);
        element(by.css("[value='LOGIN']")).click();
    },

    verifyHomepage: function() {
        browser.wait(EC.visibilityOf(element(by.css("[data-icon='shopping-cart']"))), 10000);
    }
};