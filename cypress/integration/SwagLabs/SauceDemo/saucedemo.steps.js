import ShoppingFlow from "./saucedemo.page"

// Login successfully


Given(/^I am on the SauceDemo login page$/, () => {
ShoppingFlow.VisitPage
});

When(/^I enter a valid username$/, () => {
	return true;
});

When(/^I enter a valid password$/, () => {
	return true;
});

When(/^I click the Login button$/, () => {
	return true;
});

Then(/^I should be logged in and redirected to the Products page$/, () => {
	return true;
});
