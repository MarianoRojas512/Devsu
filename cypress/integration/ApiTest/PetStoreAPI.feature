Feature: Pet store API

Scenario: Adding a new pet
    Given I Want to add a new pet to the store
    When a POST request is sent to the correct API endpoint with the body form
    Then I receive 200 status response 

Scenario: Get pet by ID
    Given I Want to view the information of a pet by searching by ID
    When a GET request is sent to the correct API endpoint
    Then I receive 200 status response with the pet information

Scenario: Update pet by ID
    Given I Want to update the information of a pet by ID
    When a POST request is sent to the correct API endpoint with the updated info
    Then I receive 200 status response with the pet information updated

Scenario: Get pet by status
    Given I Want to view the pet list by status
    When a GET request is sent to the correct API endpoint with the correct query status
    Then I receive 200 status response with the pet information by status





