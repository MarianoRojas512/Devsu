const baseUrl = "https://petstore.swagger.io/v2"

Cypress.Commands.add("AddPet", () => {
    cy.request({
        method: "POST",
        url: `${baseUrl}/pet`,
        body: {   
            "id": 10,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "Mariano Pet",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                "id": 0,
                "name": "string"
                }
            ],
            "status": "available"
        }
    });
});

Cypress.Commands.add("GetpetByID", (id) => {
    cy.request({
        method: "GET",
        url: `${baseUrl}/pet/${id}`,
    });
});

Cypress.Commands.add("UpdatePet", (id) => {
    cy.request({
        method: "POST",
        url: `${baseUrl}/pet/${id}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: true,
        body: {   
            name: "Mariano Updated",
            status: "sold"
        }
    });
    
});

Cypress.Commands.add("GetpetByStatus", () => {
    cy.request({
        method: "GET",
        url: `${baseUrl}/pet/findByStatus?status=sold`,
    });
});