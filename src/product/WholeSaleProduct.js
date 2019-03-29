const Product = require('./Product');

class WholeSaleProduct extends Product {
    constructor(sku, name, unitPrice, wholeSaleThreadshold, discountPrice) {
        super(sku, name, unitPrice);
        this.wholeSaleThreadshold = wholeSaleThreadshold;
        this.discountPrice = discountPrice;
    }

    priceForQuantity(quantity) {
        if (quantity > this.wholeSaleThreadshold) return quantity * this.discountPrice;
        return super.priceForQuantity(quantity);
    }
}

module.exports = WholeSaleProduct;