const {shoppingData} = require('./shopping-data');

const getProfileAsync = (user) => {
    return new Promise((resolve, reject) => {
            resolve(shoppingData.profile);
        })
};


module.exports.getProfileAsync = getProfileAsync;
