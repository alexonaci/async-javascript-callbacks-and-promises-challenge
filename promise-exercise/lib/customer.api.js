const { shoppingData } = require("./shopping-data");
const { USER_ERROR_MESSAGE } = require("./customer.api");

const getProfileAsync = (user) => {
  return new Promise((resolve, reject) => {
    if (user === shoppingData.profile.id) {
      resolve(shoppingData.profile);
    } else {
      reject(USER_ERROR_MESSAGE);
    }
  });
};

module.exports.getProfileAsync = getProfileAsync;
