const USER_API = 'https://randomuser.me/api/';

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

getUsers
    .then(convertToJson)
    .then(displayUserName)
    .catch(resolveError)

console.log('My code');

function resolveError() {
    return (error) => {
        console.log('You got a network error ;)');
    };
}

