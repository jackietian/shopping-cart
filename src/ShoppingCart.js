const Product = require('./product/Product');
const WholeSaleProduct = require('./product/WholeSaleProduct');
const XForYProduct = require('./product/XForYProduct');
const BundleProduct = require('./product/BundleProduct');

class ShoppingCart {
    constructor(products, priceConfig) {
        this.products = products;
        this.shoppingCart = {};
        this.pricingRules = priceConfig;
    }

    /**
     * add item to shopping cart
     * e.g {ipd: 1, atv: 2, mbp: 3}
     * @param string sku 
     */
    scan(sku) {
        this.shoppingCart[sku] = (this.shoppingCart[sku] || 0) + 1;
    }

    /**
     * calculate the total price
     */
    total() {
        let total = 0;
        Object.keys(this.shoppingCart).forEach(sku => {
            const quantity = this.shoppingCart[sku];
            const product = this.findProduct(sku);
            total = total + product.priceForQuantity(quantity);
        })
        return parseFloat(total.toFixed(2));
    }

    /**
     * find the correct product based on pricing rules defined in priceConfig.js
     * @param string sku 
     */
    findProduct(sku) {
        const {
            name,
            price
        } = this.products.find(product => product.sku === sku);
        const pricingRule = this.pricingRules.find(rule => rule.sku === sku);
        if (pricingRule) {
            if (pricingRule.model === 'XFORY') {
                const {
                    x,
                    y
                } = pricingRule;
                return new XForYProduct(sku, name, price, x, y);
            }

            if (pricingRule.model === 'WHOLESALE') {
                const {
                    wholeSaleThreadshold,
                    discountPrice
                } = pricingRule;
                return new WholeSaleProduct(sku, name, price, wholeSaleThreadshold, discountPrice);
            }

            if (pricingRule.model === 'BUNDLE') {
                const {
                    bundledSku,
                    discountPrice
                } = pricingRule;
                const bundledSkuQuantity = this.shoppingCart[bundledSku] ? this.shoppingCart[bundledSku] : 0;
                return new BundleProduct(sku, name, price, bundledSku, discountPrice, bundledSkuQuantity);
            }
        }
        return new Product(sku, name, price);
    }

    clear() {
        this.shoppingCart = {};
    }
}

module.exports = ShoppingCart;