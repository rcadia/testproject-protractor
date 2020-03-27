var landingPage = require('../pageObjects/landingPage.js');
var homePage = require('../pageObjects/homePage.js');
var cartPage = require('../pageObjects/cartPage.js');

describe('View Cart,', function() {

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

    it('should be redirected to View Cart page upon clicking Cart Icon.', function() {
        homePage.clickCartIcon();
    });

    it('display all my items added in cart.', function() {
        cartPage.verifyProductsAddedInCart("//a[@id='item_4_title_link']//div","Sauce Labs Backpack");
    });
});