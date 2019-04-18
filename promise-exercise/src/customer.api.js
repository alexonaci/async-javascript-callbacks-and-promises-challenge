const getProfileAsync = (user) => {
    return new Promise((resolve, reject) => {
            const response = {
                id: 12345,
                name: 'Mihaita',
                zipCode: 55555
            };
            resolve(response);
        })
};


module.exports.getProfileAsync = getProfileAsync;
