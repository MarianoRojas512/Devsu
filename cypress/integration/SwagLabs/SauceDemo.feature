Feature: Buying shopping flow saucedemo
@focus 
Scenario : login with valid credentials 
  Given I am on the SauceDemo login page
  When I enter a valid username 
  And I enter a valid password 
  And I click the Login button
  Then I should be logged in and redirected to the Products page
