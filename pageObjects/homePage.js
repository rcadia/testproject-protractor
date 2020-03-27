var EC = protractor.ExpectedConditions;

module.exports = {
    addProductToCart: function() {
        browser.wait(EC.visibilityOf(element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button"))), 10000);
        element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button")).click();
    },

    removeProductToCart: function() {
        browser.wait(EC.visibilityOf(element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button"))), 10000);
        element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button")).click();
    },

    verifyBtnTextChangeFromAddToCartToRemoved: function() {
        expect(element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button")).getText()).toEqual('REMOVE');
    },

    verifyBtnTextChangeRemovedToAddToCart: function() {
        expect(element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button")).getText()).toEqual('ADD TO CART');
    },

    verifyCartBadgeIncrement: function(expectedCount) {
        browser.wait(EC.visibilityOf(element(by.css(".shopping_cart_badge"))), 10000);
        expect(element(by.css(".shopping_cart_badge")).getText()).toEqual(expectedCount);
    },

    clickCartIcon: function() {
        element(by.css("[data-icon='shopping-cart']")).click();
        browser.wait(EC.visibilityOf(element(by.css("[href='./checkout-step-one.html']"))), 10000);
    }

};