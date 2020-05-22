const orderApi = require('./lib/order.api');
const customerApi = require('./lib/customer.api');

//ASYNC AWAIT

/* async function submitOrder(user) {
    let shoppingCart = await orderApi.getShoppingCartAsync(user);
    let userProfile = await customerApi.getProfileAsync(user);
    let zipCode = userProfile.zipCode;
    let shippingRate = orderApi.calculateShippingSync(shoppingCart, zipCode);
    let orderSuccessful = await orderApi.placeOrderAsync(shoppingCart, shippingRate);
    console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}

submitOrder(12345); */

//PROMISE

const submitOrder = (user) => {

    let shoppingCart, zipCode, shippingRate, orderSuccessful;

    // Get the current user's shopping cart
    orderApi.getShoppingCartAsync(user).then((cart) => {
        shoppingCart = cart;
    
        // Also look up the ZIP code from their profile
        return customerApi.getProfileAsync(user).then((profile) => {
            zipCode = profile.zipCode;
            // Calculate the shipping fees
            shippingRate = orderApi.calculateShippingSync(shoppingCart, zipCode);
            // Submit the order
            return orderApi.placeOrderAsync(shoppingCart, shippingRate).then((success) => {
                orderSuccessful = success;
                console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
            });
        });
    });
};

submitOrder(12345);