const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    get iconCart () { return $('.shopping_cart_link');}
    get buttonBackPack () { return $('#add-to-cart-sauce-labs-backpack');}
    get buttonCart () { return $('#shopping_cart_container');}
    get buttonCheckout () { return $('#checkout');}


    async validateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(this.iconCart).toBeDisplayed()
    }

    async validateAddCart() {
        await this.buttonBackPack.click()
    }

    async validateCart() {
        await this.buttonCart.click()
    }

    async validateCheckout() {
        await this.buttonCheckout.click()
    }
    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();