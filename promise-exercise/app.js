const orderApi = require('./lib/order.api');
const customerApi = require('./lib/customer.api');


// -------------------------
// Using promises with then 
// -------------------------

const submitOrder = (user) => {

    let shoppingCart, zipCode, shippingRate, orderSuccessful;

    orderApi.getShoppingCartAsync(user).then((cart) => {
        shoppingCart = cart;
        return customerApi.getProfileAsync(user);
    }).then((profile) => {
        zipCode = profile.zipCode;
        shippingRate = orderApi.calculateShippingSync(shoppingCart, zipCode);
        return orderApi.placeOrderAsync(shoppingCart, shippingRate);
    }).then((success) => {
        orderSuccessful = success;
        console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
    })
}

submitOrder(12345);


// -------------------------
// Using aync await 
// -------------------------

// async function submitOrder(user) {

//     let shoppingCart = await orderApi.getShoppingCartAsync(user);
//     let userProfile = await customerApi.getProfileAsync(user);
//     let zipCode = userProfile.zipCode;
//     let shippingRate = orderApi.calculateShippingSync(shoppingCart, zipCode);
//     let orderSuccessful = await orderApi.placeOrderAsync(shoppingCart, shippingRate);
//     console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
// }

// submitOrder(12345);


       