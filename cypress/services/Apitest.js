const baseUrl = "https://catfact.ninja"

Cypress.Commands.add("GetBreeds", () => {
    cy.request({
        method: "GET",
        url: `${baseUrl}/breeds`,
    });
});