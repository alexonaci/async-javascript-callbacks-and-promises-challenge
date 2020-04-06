const request = require('request');

const USER_API = 'https://randomuser.me/api/';
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
                reject('ERRORO:');
            }
            resolve(JSON.parse(body));
        })
    })
};


// getPromisedStuffAsync(BACON_API)
//     .then((response) => {
//         console.log(response);
//         return getPromisedStuffAsync(USER_API);
//     })
//     .then((outputFromPreviousStuff) => {
//         console.log(outputFromPreviousStuff);
//     })
//     .catch((err) => {
//         console.error('err');
//     });

//syntactic sugar
async function procesAsyncStuff() {
    try {
        const baconResult = await getPromisedStuffAsync(BACON_API);
        const userResult = await getPromisedStuffAsync(USER_API);
        console.log(baconResult);
        console.log(userResult);
    } catch (err) {
        console.log('err', err);
    }
}

async function another() {
    await procesAsyncStuff();
    console.log('first');
}

another();


// https://sung.codes/blog/2019/05/18/promise-race-vs-promise-any-and-promise-all-vs-promise-allsettled/
// Promise.all([getPromisedStuffAsync(BACON_API), getPromisedStuffAsync(USER_API)])
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((err) => {
//         console.error(err);
//     });
