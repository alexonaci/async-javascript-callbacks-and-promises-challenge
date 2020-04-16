const orderApi = require("./lib/order.api");
const customerApi = require("./lib/customer.api");

const submitOrder = async (user) => {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;

  // Get the current user's shopping cart
  await orderApi.getShoppingCartAsync(user).then((cart) => {
    shoppingCart = cart;
  });

  // Also look up the ZIP code from their profile
  await customerApi.getProfileAsync(user).then((profile) => {
    zipCode = profile.zipCode;
  });

  // Calculate the shipping fees
  shippingRate = orderApi.calculateShippingSync(shoppingCart, zipCode);

  // Place order
  await orderApi.placeOrderAsync(shoppingCart, shippingRate).then((success) => {
    orderSuccessful = success;
  });

  console.log(
    `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
};

submitOrder(12345);
