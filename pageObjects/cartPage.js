var EC = protractor.ExpectedConditions;

module.exports = {

    clickCheckout: function() {
        browser.wait(EC.visibilityOf(element(by.css("[href='./checkout-step-one.html']"))), 10000);
        element(by.css("[href='./checkout-step-one.html']")).click();
        browser.wait(EC.visibilityOf(element(by.css("[value='CONTINUE']"))), 10000);
    },

    verifyProductsAddedInCart: function(locator, text){
        browser.wait(EC.visibilityOf(element(by.xpath(locator))), 10000);
        expect(element(by.xpath(locator)).getText()).toEqual(text);
    }
};