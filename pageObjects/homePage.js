var EC = protractor.ExpectedConditions;

var homePage = require("../locators/homePage.json");
var cartPage = require("../locators/cartPage.json");

module.exports = {
    addProductToCart: function() {
        browser.wait(EC.visibilityOf(element(by.xpath(homePage.itemSauceLabsBackpack))), 10000);
        element(by.xpath(homePage.itemSauceLabsBackpack)).click();
    },

    removeProductToCart: function() {
        browser.wait(EC.visibilityOf(element(by.xpath(homePage.itemSauceLabsBackpack))), 10000);
        element(by.xpath(homePage.itemSauceLabsBackpack)).click();
    },

    verifyBtnTextChangeFromAddToCartToRemoved: function() {
        expect(element(by.xpath(homePage.itemSauceLabsBackpack)).getText()).toEqual('REMOVE');
    },

    verifyBtnTextChangeRemovedToAddToCart: function() {
        expect(element(by.xpath(homePage.itemSauceLabsBackpack)).getText()).toEqual('ADD TO CART');
    },

    verifyCartBadgeIncrement: function(expectedCount) {
        browser.wait(EC.visibilityOf(element(by.css(homePage.icnShoppingCartBadge))), 10000);
        expect(element(by.css(homePage.icnShoppingCartBadge)).getText()).toEqual(expectedCount);
    },

    clickCartIcon: function() {
        element(by.css(homePage.icnShoppingCart)).click();
        browser.wait(EC.visibilityOf(element(by.css(cartPage.btnCheckout))), 10000);
    }

};