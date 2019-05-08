const request = require('request');

const USER_API = 'https://randomuser.me/api/stricam';
const BACON_API = 'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1';

const options = {
    url: USER_API,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
};

const optionsBacon = {
    url: BACON_API,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
};

const getPromisedStuffAsync = (url) => {
    options.url = url;
    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            if (err) {
                reject('ERRORO:' + err);
            }
            resolve(JSON.parse(body));
        })
    })
};

getPromisedStuffAsync(BACON_API)
    .then((response) => {
        console.log(response);
        return getPromisedStuffAsync(USER_API);
    })
    .then((outputFromPreviousStuff) => {
        console.log(outputFromPreviousStuff);
    })
    .catch((err) => {
        console.error(err);
    });


Promise.all([getPromisedStuffAsync(BACON_API), getPromisedStuffAsync(USER_API)])
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
       console.error(err);
    });
