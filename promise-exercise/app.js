const orderApi = require("./lib/order.api");
const customerApi = require("./lib/customer.api");

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

  setTimeout(function () {
    // Calculate the shipping fees
    shippingRate = orderApi.calculateShippingSync(shoppingCart, zipCode);
    // Submit the order
    orderApi.placeOrderAsync(shoppingCart, shippingRate).then((success) => {
      orderSuccessful = success;
    });
  }, 3000);

  setTimeout(function () {
    console.log(
      `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
    );
  }, 5000);
};

submitOrder(12345);
