var EC = protractor.ExpectedConditions;

describe('Login Process,', function(){
    it('should be able to navigate to login page.', function() {
        browser.get('https://www.saucedemo.com/index.html');
    });

    it('I should be able to see and enter my username', function(){
        browser.wait(EC.visibilityOf(element(by.css("[data-test='username']"))), 10000);
        element(by.css("[data-test='username']")).clear().sendKeys('standard_user');
    });

    it('I should be able to see and enter my password', function(){
        browser.wait(EC.visibilityOf(element(by.css("[data-test='password']"))), 10000);
        element(by.css("[data-test='password']")).clear().sendKeys('secret_sauce');
    });

    it('I should be able to click Login button', function(){
        browser.wait(EC.visibilityOf(element(by.css("[value='LOGIN']"))), 10000);
        element(by.css("[value='LOGIN']")).click();
    });

    it('I should be able to see dashboard/welcome page', () => {
        browser.wait(EC.visibilityOf(element(by.css("[data-icon='shopping-cart']"))), 10000);
    });
});