var landingPage = require('../pageObjects/landingPage.js');
var homePage = require('../pageObjects/homePage.js');
var cartPage = require('../pageObjects/cartPage.js');
var checkoutInformationPage = require('../pageObjects/checkoutInformationPage.js');
var checkoutOverviewPage = require('../pageObjects/checkoutOverviewPage.js');

describe('Checkout Overview,', function() {

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

    it('should be able to continue to Checkout Infromation by clicking CHECKOUT', function() {
        cartPage.clickCheckout();
    });
    
    it('be able to enter first name', function() {
        checkoutInformationPage.enterFirstName();
    });

    it('be able to enter last name', function() {
        checkoutInformationPage.enterLastname();
    });

    it('be able to enter zip code', function() {
        checkoutInformationPage.enterZipCode();
    });

    it('should be able to click continue', function() {
        checkoutInformationPage.clickContinue();
    });

    it('should redirect to Checkout Overview page after form submission.', function() {
        checkoutOverviewPage.verifyPage();
    });
});