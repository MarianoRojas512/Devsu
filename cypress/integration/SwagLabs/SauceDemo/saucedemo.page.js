const url = 'https://www.saucedemo.com/'

class ShoppingFlow {
    constructor(){
        this.loginBttn = '#login-button'
    }

    get VisitPage(){
        return cy
        .visit(url)
    }

    get LoginClick(){
        return cy
        .get(this.loginBttn).click()
    }

    get MainScreen(){
        return cy
        .url().should('eq', 'https://www.saucedemo.com/inventory.html');
    }

}

export default new ShoppingFlow();
