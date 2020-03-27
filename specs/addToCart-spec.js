var landingPage = require('../pageObjects/landingPage.js');
var homePage = require('../pageObjects/homePage.js');


describe('Add to Cart,', function() {

    it('login using valid credentials.', function() {
        landingPage.navigateToPage();
        landingPage.enterUserName();
        landingPage.enterPassword();
        landingPage.clickLogin();
        landingPage.verifyHomepage();
    });

    it('should add products successfully.', function() {
        homePage.addProductToCart();
    });

    it('should change text from ADD TO CART to REMOVE.', function() {
        homePage.verifyBtnTextChangeFromAddToCartToRemoved();
    });

    it('cart icon should have increment on the badge.', function() {
        homePage.verifyCartBadgeIncrement('1');
    });

    it('should be able to remove products successfully.', function() {
        homePage.removeProductToCart();
    });

    it('should change text from REMOVE to ADD TO CART.', function() {
        homePage.verifyBtnTextChangeRemovedToAddToCart();
    });
});