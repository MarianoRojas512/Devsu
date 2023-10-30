import ShoppingFlow from "./saucedemo.page"

// Shopping flow

Given(/^I Want to buy things from SauceDemo$/, () => {
    ShoppingFlow.VisitPage
 
});
When(/^Login to the Page$/, () => {
    ShoppingFlow.UsernameType
    ShoppingFlow.PasswordType
    ShoppingFlow.LoginClick
    ShoppingFlow.MainScreen
});

When(/^add products to my shopping cart$/, () => {
	ShoppingFlow.Addone
    ShoppingFlow.Addtwo
});

When(/^and I complete and confirm the shopping form$/, () => {
	ShoppingFlow.ShoppingCart
    ShoppingFlow.TitleCart
    ShoppingFlow.Buy
    ShoppingFlow.Formcompletion
    ShoppingFlow.Continuebuy
    ShoppingFlow.PurchaseInfo
    ShoppingFlow.Finish
});

Then(/^I receive a confirmation of my order with the information of my purchace$/, () => {
	ShoppingFlow.PurchaseConfirmation
});

