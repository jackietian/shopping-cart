# Shopping Cart
    - Users enter the product skus from terminal, e.g atv,atv,ipd
    - Product details are kept at src/data/data.js
    - Pricing rules for each sku are defined in priceConfig.js
    - Pricing rules include:
        - XFORY: if customer buy 3 iPads, only pay for 2
        - WHOLESALE: if customer buy more than 4 iPad, price will drop to 499.99
        - BUNDLE: if customer buy a macbook pro, the vga will be free

## setup
```
npm install
npm start
```

## test
```
npm test
```
