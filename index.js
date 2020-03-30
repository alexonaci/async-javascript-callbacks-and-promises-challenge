setTimeout(() => {
    console.log('1');
}, 1000);

setTimeout(() => {
    setTimeout(() => {
        console.log('2');
    }, 1000);
}, 1000);

setTimeout(() => {
    console.log('4');
}, 1000);

// console.log('2');

// const log = new Promise((resolve, reject) => {
//     resolve(true);
// });

// log.then(console.log('3'));

// var arr = [0, 1, 2, 3];

// for (var i = 0; i < arr.length; i++) {
//     // arr.forEach((element, i) => {
//     setTimeout(function () {
//         console.log('The index of this number is: ' + i);
//     }, 0);
//     // })
// }
