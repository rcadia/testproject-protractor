var EC = protractor.ExpectedConditions;

describe('View Cart,', function() {

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
        
        // Product 2
        browser.wait(EC.visibilityOf(element(by.xpath("//div[contains(text(),'Sauce Labs Bike Light')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button"))), 10000);
        element(by.xpath("//div[contains(text(),'Sauce Labs Bike Light')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button")).click();
    });

    it('should be redirected to View Cart page upon clicking Cart Icon.', function() {
        element(by.css("[data-icon='shopping-cart']")).click();
        browser.wait(EC.visibilityOf(element(by.css("[href='./checkout-step-one.html']"))), 10000);
    });

    it('display all my items added in cart.', function() {
        browser.wait(EC.visibilityOf(element(by.xpath("//a[@id='item_0_title_link']/div"))), 10000);
        expect(element(by.xpath("//a[@id='item_0_title_link']/div")).getText()).toEqual('Sauce Labs Bike Light');
        browser.wait(EC.visibilityOf(element(by.xpath("//a[@id='item_4_title_link']//div"))), 10000);
        expect(element(by.xpath("//a[@id='item_4_title_link']/div")).getText()).toEqual('Sauce Labs Backpack');
    });
    

});