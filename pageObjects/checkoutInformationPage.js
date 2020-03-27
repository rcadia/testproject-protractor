var EC = protractor.ExpectedConditions;

module.exports = {
    enterFirstName: function() {
        browser.wait(EC.visibilityOf(element(by.css("#first-name"))), 10000);
        element(by.css("#first-name")).clear().sendKeys('Ross'); 
    },

    enterLastname: function() {
        browser.wait(EC.visibilityOf(element(by.css("#last-name"))), 10000);
        element(by.css("#last-name")).clear().sendKeys('Bendal'); 
    },

    enterZipCode: function() {
        browser.wait(EC.visibilityOf(element(by.css("#postal-code"))), 10000);
        element(by.css("#postal-code")).clear().sendKeys('1234'); 
    },

    clickContinue: function() {
        browser.wait(EC.visibilityOf(element(by.css("[value='CONTINUE']"))), 10000);
        element(by.css("[value='CONTINUE']")).click();
    }
}