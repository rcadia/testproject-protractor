var EC = protractor.ExpectedConditions;

describe('Successful Payment,', function() {

    it('login using valid credentials.', function() {
        browser.get('https://www.saucedemo.com/index.html');
        browser.wait(EC.visibilityOf(element(by.css("[data-test='username']"))), 10000);
        element(by.css("[data-test='username']")).clear().sendKeys('standard_user');
        browser.wait(EC.visibilityOf(element(by.css("[data-test='password']"))), 10000);
        element(by.css("[data-test='password']")).clear().sendKeys('secret_sauce');
        browser.wait(EC.visibilityOf(element(by.css("[value='LOGIN']"))), 10000);
        element(by.css("[value='LOGIN']")).click();
        browser.wait(EC.visibilityOf(element(by.css("[data-icon='shopping-cart']"))), 10000);
    });

    it('should add products successfully.', function() {
        // Product 1
        browser.wait(EC.visibilityOf(element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button"))), 10000);
        element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button")).click();
        
    });

    it('should be redirected to View Cart page upon clicking Cart Icon.', function() {
        element(by.css("[data-icon='shopping-cart']")).click();
        browser.wait(EC.visibilityOf(element(by.css("[href='./checkout-step-one.html']"))), 10000);
    });

    it('should be able to continue to Checkout Infromation by clicking CHECKOUT', function() {
        browser.wait(EC.visibilityOf(element(by.css("[href='./checkout-step-one.html']"))), 10000);
        element(by.css("[href='./checkout-step-one.html']")).click();
        browser.wait(EC.visibilityOf(element(by.css("[value='CONTINUE']"))), 10000);
    });
    
    it('be able to enter first name', function() {
        browser.wait(EC.visibilityOf(element(by.css("#first-name"))), 10000);
        element(by.css("#first-name")).clear().sendKeys('Ross'); 
    });

    it('be able to enter last name', function() {
        browser.wait(EC.visibilityOf(element(by.css("#last-name"))), 10000);
        element(by.css("#last-name")).clear().sendKeys('Bendal'); 
    });

    it('be able to enter zip code', function() {
        browser.wait(EC.visibilityOf(element(by.css("#postal-code"))), 10000);
        element(by.css("#postal-code")).clear().sendKeys('1234'); 
    });

    it('should be able to click continue', function() {
        browser.wait(EC.visibilityOf(element(by.css("[value='CONTINUE']"))), 10000);
        element(by.css("[value='CONTINUE']")).click();
    });

    it('should redirect to Checkout Overview page after form submission.', function() {
        browser.wait(EC.visibilityOf(element(by.css(".subheader"))), 10000);
        expect(element(by.css(".subheader")).getText()).toEqual('Checkout: Overview');
    });

    it('should complete my payment after clicking FINISH', function() {
        browser.wait(EC.visibilityOf(element(by.css("[href='./checkout-complete.html']"))), 10000);
        element(by.css("[href='./checkout-complete.html']")).click();
    });

    it('should display Finish as page header.', function() {
        browser.wait(EC.visibilityOf(element(by.css(".subheader"))), 10000);
        expect(element(by.css(".subheader")).getText()).toEqual('Finish');
    });

    it('should display Thank You - Header.', function() {
        browser.wait(EC.visibilityOf(element(by.css("h2.complete-header"))), 10000);
        expect(element(by.css("h2.complete-header")).getText()).toEqual('THANK YOU FOR YOUR ORDER');
    });

    it('should display Thank You - Message.', function() {
        browser.wait(EC.visibilityOf(element(by.css("div.complete-text"))), 10000);
        expect(element(by.css("div.complete-text")).getText()).toEqual('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    });

});