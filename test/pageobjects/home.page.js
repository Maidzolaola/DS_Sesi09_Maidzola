const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    get iconCart () { return $('.shopping_cart_link');}
    get buttonBackPack () { return $('#add-to-cart-sauce-labs-backpack');}


    async validateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(this.iconCart).toBeDisplayed()
    }

    async validateAddCart() {
        await this.buttonBackPack.click()
    }
    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();