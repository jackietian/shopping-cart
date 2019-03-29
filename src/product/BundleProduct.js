const Product = require('./Product');

class BundleProduct extends Product {
    constructor(sku, name, price, bundledSku, discountPrice, bundledSkuQuantity) {
        super(sku, name, price);
        this.bundledSku = bundledSku;
        this.discountPrice = discountPrice;
        this.bundledSkuQuantity = bundledSkuQuantity;
    }

    priceForQuantity(quantity) {
        return (quantity - this.bundledSkuQuantity) * this.unitPrice;
    }
}

module.exports = BundleProduct;