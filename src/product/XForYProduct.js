const Product = require('./Product');

class XForYProduct extends Product {
    constructor(sku, name, price, x, y) {
        super(sku, name, price);
        this.x = x;
        this.y = y;
    }

    priceForQuantity(quantity) {
        // 3 for 2
        // 6 for 4
        // 7 for 4 + 1
        const times = parseInt(quantity / this.x);
        const remainder = quantity % this.x;
        return ((times * this.y) + remainder) * this.unitPrice;
    }
}

module.exports = XForYProduct;