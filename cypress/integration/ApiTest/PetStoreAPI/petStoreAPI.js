import '../../../services/petStore'

const id = 10

// POST NEW PET

Given(/^I Want to add a new pet to the store$/, () => {
	return true;
});

When(/^a POST request is sent to the correct API endpoint with the body form$/, () => {
	cy.AddPet().then((resAddPet) =>{
        expect(resAddPet.body).to.be.not.null
        expect(resAddPet.status).to.eq(200)
    })
});

Then(/^I receive 200 status response$/, () => {
	return true;
});

// GET NEW PET CREATED

Given(/^I Want to view the information of a pet by searching by ID$/, () => {
	return true;
});

When(/^a GET request is sent to the correct API endpoint$/, () => {
	cy.GetpetByID(id).then((resGetpetByID) =>{
        expect(resGetpetByID.body).to.be.not.null
        expect(resGetpetByID.status).to.eq(200)
    })
});

Then(/^I receive 200 status response with the pet information$/, () => {
	return true;
});

// GET PET UPDATED BY ID

Given(/^I Want to update the information of a pet by ID$/, () => {
	return true;
});

When(/^a POST request is sent to the correct API endpoint with the updated info$/, () => {
	cy.UpdatePet(id).then((resUpdatePet) =>{
        expect(resUpdatePet.body).to.be.not.null
        expect(resUpdatePet.status).to.eq(200)
    })
});

Then(/^I receive 200 status response with the pet information updated$/, () => {
	return true;
});

// GET PET BY STATUS

Given(/^I Want to view the pet list by status$/, () => {
	return true;
});

When(/^a GET request is sent to the correct API endpoint with the correct query status$/, () => {
    cy.GetpetByStatus().then((resGetpetByStatus) =>{
        expect(resGetpetByStatus.body).to.be.not.null
        expect(resGetpetByStatus.status).to.eq(200)
    })
});

Then(/^I receive 200 status response with the pet information by status$/, () => {
	return true;
});
