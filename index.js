setTimeout(() => {
    console.log('1');
}, 0);

console.log('2');

const log = new Promise((resolve, reject) => {
    resolve(true);
});

log.then(console.log('3'));