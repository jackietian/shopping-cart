const ShoppingCart = require('../ShoppingCart');
const data = require('../data/data');
const priceConfig = require('../../priceConfig');

describe('test shopping cart', () => {
    const shoppingCart = new ShoppingCart(data, priceConfig);;

    it('shopping cart', () => {
        const shoppingCart = new ShoppingCart(data, priceConfig);
        const items = ['atv', 'atv', 'atv', 'vga'];
        items.forEach(item => shoppingCart.scan(item));
        expect(shoppingCart.total()).toBe(249.00);
        shoppingCart.clear();
    })

    it('shopping cart 2', () => {
        const shoppingCart = new ShoppingCart(data, priceConfig);
        const items = ['atv', 'ipd', 'ipd', 'atv', 'ipd', 'ipd', 'ipd'];
        items.forEach(item => shoppingCart.scan(item));
        expect(shoppingCart.total()).toBe(2718.95);
        shoppingCart.clear();
    })

    it('shopping cart 3', () => {
        const items = ['mbp', 'vga', 'ipd'];
        items.forEach(item => shoppingCart.scan(item));
        expect(shoppingCart.total()).toBe(1949.98);
        shoppingCart.clear();
    })
})