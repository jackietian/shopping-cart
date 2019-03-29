class Product {
    constructor(sku, name, unitPrice) {
        this.sku = sku;
        this.name = name;
        this.unitPrice = unitPrice;
    }

    priceForQuantity(quantity) {
        return quantity * this.unitPrice;
    }
}

module.exports = Product;