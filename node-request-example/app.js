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

request(options, (err, res, body) => {
    let jsonResponse = JSON.parse(body);
    console.log(jsonResponse);
});