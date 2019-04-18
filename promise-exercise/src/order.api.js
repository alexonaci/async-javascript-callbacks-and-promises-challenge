const cart = {
    id: 55555,
    userId: 12345,
    items: [
        {id: 11111, name: 'Perna Dormeo'},
        {id: 52461, name: 'Olive Oil'}
    ]
};

const profile = {
    id: 12345,
    name: 'Mihaita',
    zipCode: 55555
};

const getShoppingCartAsync = (user) => {
    return new Promise((resolve, reject) => {
        resolve(cart);
    })
};

const placeOrderAsync = (shoppingCart, shippingRate) => {
    return new Promise((resolve, reject) => {
        resolve(true);
    })
};

const calculateShippingSync = (shoppingCart, zipCode) => {

    if (shoppingCart !== cart) {
        throw new Error("Error in calculateShipping: Invalid cart");
    }

    if (zipCode !== profile.zipCode) {
        throw new Error("Error in calculateShipping: Invalid zip code");
    }

    return 55.55;
};

module.exports.getShoppingCartAsync = getShoppingCartAsync;
module.exports.placeOrderAsync = placeOrderAsync;
module.exports.calculateShippingSync = calculateShippingSync;