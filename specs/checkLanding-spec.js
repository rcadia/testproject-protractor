var landingPage = require('../pageObjects/landingPage.js');

describe('Landing Page,', function(){
    it('should be able to load successfully.', function() {
        landingPage.navigateToPage();
    });
});