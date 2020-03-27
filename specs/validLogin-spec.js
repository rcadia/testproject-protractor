var landingPage = require('../pageObjects/landingPage.js');

describe('Login Process,', function(){
    it('should be able to navigate to login page.', function() {
        landingPage.navigateToPage();
    });

    it('I should be able to see and enter my username', function(){
        landingPage.enterUserName();
    });

    it('I should be able to see and enter my password', function(){
        landingPage.enterPassword();
    });

    it('I should be able to click Login button', function(){
        landingPage.clickLogin();
    });

    it('I should be able to see dashboard/welcome page', () => {
        landingPage.verifyHomepage();
    });
});