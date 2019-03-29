/**
 * define three types of pricing rules
 * #1. XFORY
 *  customer buy 3 iPads, and only pay for 2
 * 
 * #2. WHOLESALE
 *  if customer buy more than 4 iPad, price will drop to 499.99
 * 
 * #3. BUNDLE
 *  if customer buy a macbook pro, the vga will be free
 */

module.exports = [{
    sku: 'atv',
    model: 'XFORY',
    x: 3,
    y: 2
}, {
    sku: 'ipd',
    model: 'WHOLESALE',
    wholeSaleThreadshold: 4,
    discountPrice: 499.99
}, {
    sku: 'vga',
    model: 'BUNDLE',
    bundledSku: 'mbp',
    discountPrice: 0,
}];