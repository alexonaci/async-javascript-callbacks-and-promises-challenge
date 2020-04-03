// WEB API https://developer.mozilla.org/it/docs/Web/API
// Networks - fetch(), xhr (XML- format, http protocol, request - request)
// DOM - document
// Timers: setTimeout, setInterval, setImmediate (Node.js)
// Storage: localStorage(), 
// Console: console.log()


// Javascript has: Execution thread, execution stack
// const myFunction = function () { console.log('1') }
// setTimeout(myFunction, 0);

// setTimeout(() => { console.log(6) }, 0); // second

// setTimeout(() => {
//     setTimeout(() => { console.log(5) }, 1000); // fourth
// }, 1000);

// setTimeout(() => { console.log(6) }, 1000); // third

// console.log('2'); // first

var i;

// for (i = 0; i < 4; i++) {
//     // 0
//     (function (i) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     })(i)

// }


const mama = () => {
    console.log('meme');
}



//..setTimeout


// arr.forEach((element, index) => {
//     setTimeout(() => {
//         console.log(index);
//     }, 1000);
// })