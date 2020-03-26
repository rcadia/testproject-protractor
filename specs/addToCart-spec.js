var EC = protractor.ExpectedConditions;

describe('Add to Cart,', function() {

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
        browser.wait(EC.visibilityOf(element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button"))), 10000);
        element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button")).click();
    });

    it('should change text from ADD TO CART to REMOVE.', function() {
        expect(element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button")).getText()).toEqual('REMOVE');
    });

    it('cart icon should have increment on the badge.', function() {
        browser.wait(EC.visibilityOf(element(by.css(".shopping_cart_badge"))), 10000);
        expect(element(by.css(".shopping_cart_badge")).getText()).toEqual('1');
    });

    it('should be able to remove products successfully.', function() {
        browser.wait(EC.visibilityOf(element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button"))), 10000);
        element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button")).click();
    });

    it('should change text from REMOVE to ADD TO CART.', function() {
        expect(element(by.xpath("//div[contains(text(),'Sauce Labs Backpack')]/ancestor::div[contains(@class, 'inventory_item_label')]/following-sibling::div[contains(@class,'pricebar')]/button")).getText()).toEqual('ADD TO CART');
    });

    

});