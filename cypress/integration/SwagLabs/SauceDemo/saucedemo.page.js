const url = 'https://www.saucedemo.com/'

class ShoppingFlow {
    constructor(){
        this.username = '[data-test=username]'
        this.password = '[data-test=password]'
        this.loginBttn = '[data-test=login-button]'
        this.itemOne = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
        this.itemTwo = '[data-test=add-to-cart-sauce-labs-fleece-jacket]'
        this.cart = '.shopping_cart_link'
        this.cartTitle = '.title'
        this.checkout = '[data-test=checkout]'
        this.formName = '[data-test=firstName]'
        this.continue = '[data-test=continue]'
        this.finishPurchase = '[data-test=finish]'
        this.confirmation = '.complete-header'
    }

    get VisitPage(){
        return cy
        .visit(url)
    }

    get UsernameType(){
        return cy
        .get(this.username).type('standard_user')
    }

    get PasswordType(){
        return cy
        .wait(500)
        .get(this.password).type('secret_sauce')
    }

    get LoginClick(){
        return cy
        .wait(500)
        .get(this.loginBttn).click()
    }

    get MainScreen(){
        return cy
        .wait(500)
        .url().should('eq', 'https://www.saucedemo.com/inventory.html');
    }

    get Addone(){
        return cy
        .wait(500)
        .get(this.itemOne).click()
    }

    get Addtwo(){
        return cy
        .wait(500)
        .get(this.itemTwo).click()
    }

    get ShoppingCart(){
        return cy
        .wait(500)
        .get(this.cart).click()
    }

    get TitleCart(){
        return cy
        .wait(500)
        .get(this.cartTitle).should('exist').contains('Your Cart')
    }

    get Buy(){
        return cy
        .wait(500)
        .get(this.checkout).click()
    }

    get Formcompletion(){
        return cy
        .wait(500)
        .get(this.formName).type('Mariano')
        .tab()
        .type('Rojas Matas')
        .tab()
        .type('1424')
    }

    get Continuebuy(){
        return cy
        .wait(500)
        .get(this.continue).click()
    }

    get PurchaseInfo(){
        return cy
        .wait(500)
        .get(this.cartTitle).should('exist').contains('Checkout')
    }

    get Finish(){
        return cy
        .wait(500)
        .get(this.finishPurchase).click()
    }

    get PurchaseConfirmation(){
        return cy
        .wait(500)
        .get(this.confirmation).should('exist').contains('Thank you for your order!')
    }

}

export default new ShoppingFlow();
