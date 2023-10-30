Feature: Api test with cypress and cucumber
Scenario: Login with valid credentials
  Given I want to know the cats breeds
  When I send a Get request to the API
  Then it gives me the breeds of the cats I requested with 200 status 
