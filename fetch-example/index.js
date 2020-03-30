import Stuff from './newClass';

const USER_API = 'https://randomuser.me/api/23123';

function convertToJson(input) {
    return input.json();
}

function displayUserName(data) {
    if (data.results && data.results.length > 0) {
        data.results.forEach(({ name = { first: '' } }) => {
            console.log(name.first);
        });
    }
}

const getUsers = fetch(USER_API);

getUsers.then(convertToJson).then(displayUserName).catch((error) => {
    console.log('You got a network error ;)');
})

console.log('My code');

console.log(Stuff());
