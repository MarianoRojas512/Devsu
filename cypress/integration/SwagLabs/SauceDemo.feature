Feature: Shopping flow

Scenario: Shopping flow successfully
    Given I Want to buy things from SauceDemo
    When Login to the Page
    And add products to my shopping cart
    And and I complete and confirm the shopping form
    Then I receive a confirmation of my order with the information of my purchace


