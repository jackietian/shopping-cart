const ShoppingCart = require('./src/ShoppingCart');
const products = require('./src/data/data');
const priceConfig = require('./priceConfig');

const checkout = () => {
    process.stdout.write("Scanned SKUs: ")
    const stdin = process.openStdin();
    stdin.addListener("data", function (data) {
        const skus = data.toString().replace(/ /g, '').trim().split(',');
        const shoppingCart = new ShoppingCart(products, priceConfig);
        skus.forEach((sku) => shoppingCart.scan(sku));
        process.stdout.write(`Total is $${shoppingCart.total()} \n`);
        process.stdout.write("Scanned SKUs: ");
    });
}

checkout();