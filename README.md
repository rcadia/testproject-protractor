# Demo Test Project - Protractor

## Purpose
This is a sample of Test Automation Script written in Protractor. I used Swaglab from Saucelabs to create an example of an end to end test.

## Protractor to handle non-Angular Applications
The application-under-test is an e-commerce website with login, cart and payment functionalities. While protractor is written for Angular applications, this is an example that it can be used on a non-Angular apps. 

## Page Object Model
**Page object model** design pattern is also applied on this test automation project. The goal is to enhance the maintainability of the the scripts while preventing code duplication. 
>For further reading, please refer to: https://martinfowler.com/bliki/PageObject.html

## JSON as a locator storage
To add more maintainability on the tests, I've created a JSON file that stores all the locators. I've decided to create a JSON file that will represent each page of the application. In my experience, one of the main reasons why a test fails are due to the locators. Either they are too brittle or some developer updated the HTML or CSS attribute. If this happens, then we will know exactly what file are we going to access. Thus, minimizing the investigation and debugging needed to get the tests to pass again.

## High Level Diagram

![High-level-flow](https://i.imgur.com/okD8g4q.png)