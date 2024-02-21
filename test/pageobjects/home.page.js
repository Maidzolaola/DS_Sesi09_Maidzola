const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    //Elements Home Page
    get iconCart () { return $('.shopping_cart_link');}
    get buttonBackPack () { return $('#add-to-cart-sauce-labs-backpack');}
    get buttonRemove () { return $('#remove-sauce-labs-backpack');}
    get buttonCart () { return $('#shopping_cart_container');}
    get buttonLogout () { return $('#logout_sidebar_link');}
    get buttonBurger () { return $('#react-burger-menu-btn');}
    //Elements Information Page
    get buttonCheckout () { return $('#checkout');}
    get fieldName () { return $('#first-name');}
    get fieldLastName () { return $('#last-name');}
    get fieldZip () { return $('#postal-code');}
    get buttonContinue () { return $('#continue');}
    get buttonFinish () { return $('#finish');}
    get buttonBackHome () { return $('#back-to-products');}
    

    //validate Home Page
    async validateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(this.iconCart).toBeDisplayed()
    }

    async validateGlitchUser () {
        await this.buttonBurger.click();
        await this.buttonLogout.click();

    }
    //validate Information Page
    async validateAddCart() {
        await this.buttonBackPack.click()
        await this.buttonRemove.click()
        await this.buttonBackPack.click()
    }

    async validateCart() {
        await this.buttonCart.click()
    }

    async validateCheckout() {
        await this.buttonCheckout.click()
    }

    async Information (name, lastname, zip) {
        await this.fieldName.setValue(name);
        await this.fieldLastName.setValue(lastname);
        await this.fieldZip.setValue(zip);
        await this.buttonContinue.click()
        await this.buttonFinish.click()
        await this.buttonBackHome.click()
        await this.buttonBurger.click()
        await this.buttonLogout.click()
    }
    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();