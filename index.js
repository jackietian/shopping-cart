const ShoppingCart = require('./src/ShoppingCart');
const products = require('./src/data/data');
const priceConfig = require('./priceConfig');

/**
 * read user input from terminal
 */
const readUserInput = (cb) => {
    process.stdout.write("Scanned SKUs: ")
    const stdin = process.openStdin();
    stdin.addListener("data", function (data) {
        cb(data);
        // waiting for next input
        process.stdout.write("Scanned SKUs: ");
    });
}

/**
 * parse user inputs and add skus to shopping cart
 * @param String data
 */
const addToShoppingCart = (data) => {
    // parse user input, e.g. atv,atv,ipd
    const skus = data.toString().replace(/ /g, '').trim().split(',');
    const shoppingCart = new ShoppingCart(products, priceConfig);
    // scan each into shopping cart
    skus.forEach((sku) => shoppingCart.scan(sku));
    // calculate the total price
    process.stdout.write(`Total is $${shoppingCart.total()} \n`);
}

readUserInput(addToShoppingCart);