const orderApi = require('./src/order.api');
const customerApi = require('./src/customer.api');

const submitOrder = (user) => {

    let shoppingCart, zipCode, shippingRate, orderSuccessful;

    // Get the current user's shopping cart
    orderApi.getShoppingCartAsync(user).then((cart) => {
        shoppingCart = cart;
    });

    // Also look up the ZIP code from their profile
    customerApi.getProfileAsync(user).then((profile) => {
        zipCode = profile.zipCode;
    });

    // Calculate the shipping fees
    shippingRate = orderApi.calculateShippingSync(shoppingCart, zipCode);

    // Submit the order
    orderApi.placeOrderAsync(shoppingCart, shippingRate).then((success) => {
        orderSuccessful = success;
    });

    console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
};

submitOrder();

