const { shoppingData } = require('./shopping-data');
const USER_ERROR_MESSAGE = 'Cannot find user, our super big db cluster only supports one entry and that one is 12345!';

const getShoppingCartAsync = (user) => {
    return new Promise((resolve, reject) => {
        if (user === shoppingData.profile.id) {
            resolve(shoppingData.cart);
        } else {
            reject(USER_ERROR_MESSAGE);
        }
    })
};

const placeOrderAsync = (shoppingCart, shippingRate) => {
    return new Promise((resolve, reject) => {
        if (shoppingCart && shippingRate) {
            resolve(true);
        } else {
            reject('Promise rejected! Missing shopping cart or shippingRate');
        }
    })
};

const calculateShippingSync = (shoppingCart, zipCode) => {
    if (shoppingCart !== shoppingData.cart) {
        throw new Error('Error in calculateShippingSync: Invalid cart');
    }
    if (zipCode !== shoppingData.profile.zipCode) {
        throw new Error('Error in calculateShippingSync: Invalid zip code');
    }

    return 55.55;
};

module.exports.getShoppingCartAsync = getShoppingCartAsync;
module.exports.placeOrderAsync = placeOrderAsync;
module.exports.calculateShippingSync = calculateShippingSync;
module.exports.USER_ERROR_MESSAGE = USER_ERROR_MESSAGE;