import '../../../services/Apitest'

Given(/^I want to know the cats breeds$/, () => {
	return true;
});

When(/^I send a Get request to the API$/, () => {
	cy.GetBreeds().then((resGetBreeds) =>{
        expect(resGetBreeds.body).to.be.not.null
        expect(resGetBreeds.status).to.eq(200)
    })
});

Then(/^it gives me the breeds of the cats I requested with 200 status$/, () => {
	return true;
});
