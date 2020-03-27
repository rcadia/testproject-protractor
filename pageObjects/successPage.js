var EC = protractor.ExpectedConditions;

module.exports = {
    verifyHeader: function() {
        browser.wait(EC.visibilityOf(element(by.css(".subheader"))), 10000);
        expect(element(by.css(".subheader")).getText()).toEqual('Finish');
    },

    verifyTitle: function() {
        browser.wait(EC.visibilityOf(element(by.css("h2.complete-header"))), 10000);
        expect(element(by.css("h2.complete-header")).getText()).toEqual('THANK YOU FOR YOUR ORDER');
    },

    verifySubTitle: function() {
        browser.wait(EC.visibilityOf(element(by.css("div.complete-text"))), 10000);
        expect(element(by.css("div.complete-text")).getText()).toEqual('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
}


