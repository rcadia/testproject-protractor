var EC = protractor.ExpectedConditions;

module.exports = {
    verifyPage: function() {
        browser.wait(EC.visibilityOf(element(by.css(".subheader"))), 10000);
        expect(element(by.css(".subheader")).getText()).toEqual('Checkout: Overview');
    },

    clickFinish: function() {
        browser.wait(EC.visibilityOf(element(by.css("[href='./checkout-complete.html']"))), 10000);
        element(by.css("[href='./checkout-complete.html']")).click();
    }
}


