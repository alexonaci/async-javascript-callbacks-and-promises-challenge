const {shoppingData} = require('./shopping-data');

const getShoppingCartAsync = (user) => {
    return new Promise((resolve, reject) => {
        resolve(shoppingData.cart);
    })
};

const placeOrderAsync = (shoppingCart, shippingRate) => {
    return new Promise((resolve, reject) => {
        resolve(true);
    })
};

const calculateShippingSync = (shoppingCart, zipCode) => {
    if (shoppingCart !== shoppingData.cart) {
        throw new Error("Error in calculateShipping: Invalid cart");
    }
    if (zipCode !== shoppingData.profile.zipCode) {
        throw new Error("Error in calculateShipping: Invalid zip code");
    }

    return 55.55;
};

module.exports.getShoppingCartAsync = getShoppingCartAsync;
module.exports.placeOrderAsync = placeOrderAsync;
module.exports.calculateShippingSync = calculateShippingSync;