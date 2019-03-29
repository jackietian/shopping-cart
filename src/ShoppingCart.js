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

    scan(sku) {
        this.shoppingCart[sku] = (this.shoppingCart[sku] || 0) + 1;
    }

    total() {
        let total = 0;
        Object.keys(this.shoppingCart).forEach(sku => {
            const quantity = this.shoppingCart[sku];
            const product = this.findProduct(sku);
            total = total + product.priceForQuantity(quantity);
        })
        return parseFloat(total.toFixed(2));
    }

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