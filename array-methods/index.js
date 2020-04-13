
/** Array Functions **/
/*
0. Write a function that receives the array below as parameters and returns a new array which has all the elements added with 2
*/
var strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

// typeCastAndAdd() // wil not work

const typeCastAndAdd = (stringArray) => {
    return stringArray.map((element) => {
        //parseFloar Number - input '12as' -> parseFloat = 12, Number(thing) -> NaN
        return (Number(element) + 2).toString();
    })
};

console.log('Typecast: ', typeCastAndAdd(strArr));

/* 
1. Implement a function that receives an array of objects and a key name and returns an array with all the values corresponding to the key of the objects in the array.
*/
const demoArr = [
    { id: 1, color: 'red', height: 15, width: 20, distance: 10 },
    { id: 2, color: 'green', height: 5, width: 30, distance: 15 },
    { id: 3, color: 'turqoize', height: 7, width: 9, distance: 8 },
    { id: 4, color: 'blue', height: 2, width: 3, distance: 3 },
    { id: 5, color: 'red', height: 10, width: 10, distance: 2 },
    { id: 6, color: 'crimson', height: 7, width: 8, distance: 16 },
];

// pluck() // will work

function pluck(arr, key) {
    const result = arr.map(el => el[key]);
    return result;
}

console.log(pluck(demoArr, 'color'));  // => ['red', 'green', 'turqoize' .......];

/*
2. Implement a function that returns the area of all elements in the above array, area = height * width.
*/

function calculateArea(array) {
    return array.map(element => element.height * element.width)
}

console.log(calculateArea(demoArr));

/*
3. Write a function that returns a subset of the above array where the elements have an area smaller or equal to 100
*/

const filterArr = arr => {
    return arr.filter(item => (item.height * item.width) <= 100)
}

console.log(filterArr(demoArr));


/*
4. Implement a function called reject, which receives an array and an iterator function.
The iterator function receives each element in the array as a parameter and must return true or false. 
If it returns true, the element will not be included by the parent function in the resulting array.
If returns false it will be included.
*/

const reject = (array, callback) => {
    return array.filter((element) => callback(element))
}

const iterator = (element) => {
    if (element.height < 10) {
        return true;
    }
    return false;
}

console.log('reject', reject(demoArr, iterator)); // return an array of objects with height < 10

/*
5. Write a function that returns the element with the color 'crimson'
*/

const findColor = (arr, color) => arr.filter(element => element.color === color);

console.log('findColor', findColor(demoArr, 'red'));

/*
6. Write a function that returns true if all elements in the array have the area > = 10, false otherwise.
*/

const areasAreBigger = (arr, criteria) => {
    const areas = calculateArea(arr);

    return areas.every((element) => {
        if (element >= criteria) {
            return true;
        } else {
            return false;
        }
    })
}

console.log('areasAreBigger', areasAreBigger(demoArr, 5))

/*
7. Write a function that returns true if at least one of the array elements has the specified color;
*/

function atLeastOneIsOfColor(arr, color) {
    return arr.some((element) => element.color === color);
}

const returnObject = () => ({ name: 'alex' })

console.log(returnObject());

console.log(atLeastOneIsOfColor(demoArr, 'red'));

/*
8. Write a function that returns the total distance (the sum of the element distances)
*/

const sumOfDistances = (array) => {
    return array.reduce((acc, { distance }) => {
        return acc + distance;
    }, 0);
}

console.log('Sum of distances: ', sumOfDistances(demoArr));

/*
9. Write a function that returns an object that counts how many times each color appears in the object array. {red: 2, blue: 1, etc ...}
*/

function sortAreas(arr) {
    return arr.sort((a, b) => {
        const areaA = a.width * a.height;
        const areaB = b.width * b.height;

        if (areaA > areaB) {
            return 1;
        }

        if (areaB > areaA) {
            return -1;
        }

        return 0;
    })
}

// function sortAreasShort(arr) {

//     new.sort((a, b) => {
//         const areaA = a.width * a.height;
//         const areaB = b.width * b.height;
//         return areaA - areaB;
//     })

//     return new;
// }

// console.log('sortedAreas', sortAreas(demoArr));


let number = {}

function noColors(arr) {
    let numberOf = {};
    for (let i = 0; i < arr.length; i++) {
        let color = arr[i].color;
        !numberOf[color] ? numberOf[color] = 1 : numberOf[color]++;
    }
    return numberOf;
}

function noColorsReduce(arr) {
    return arr.reduce((accumulator, currentValue) => {
        if (accumulator[currentValue.color]) {
            accumulator[currentValue.color] += 1;
        } else {
            accumulator[currentValue.color] = 1;
        }
        return accumulator;
    }, {})
}

console.log("Number of colors: ", noColors(demoArr));
console.log("Number of colors reduce: ", noColorsReduce(demoArr));


/*
10. Write a function that returns an array with all elements having a unique color. Any element after the first one that has a color that would repeat is not included in the array.
*/

// const uniqueColors = demoArr => {
//     var uniqueColorsArray = [];
//     return demoArr.filter(({ color }) => {
//         let colorNotExists = true;
//         if (uniqueColorsArray.indexOf(color) > -1) {
//             colorNotExists = false;
//         } else {
//             uniqueColorsArray.push(color);
//         }
//         return colorNotExists;
//     })
// }
function uniqueColors(arr) {
    let resArr = [];
    arr.filter(function (item) {
        let i = resArr.findIndex(x => x.color === item.color);
        if (i <= -1) {
            resArr.push({ id: item.id, color: item.color, height: item.height, width: item.height, distance: item.distance });
        };
    });
    return resArr;
};

console.log(demoArr);
console.log('Unique Colors: ', uniqueColors(demoArr));

/*
11. Write a function which inverts two numbers.
*/
let a = 5, b = 8;

// a = a + b;
// b = a - b;
// a = a - b;

// (function switchNumbers() {
//     let switchHelper;
//     switchHelper = a;
//     a = b;
//     b = switchHelper;
// })();

// function invert(a, b) {
//     let temp = a;
//     a = b;
//     b = temp;
//     console.log("A:", a, "B:", b);
// }
// invert(a, b);


(function () {
    // const myObject = {
    //     prop: '3'
    // }
    // const { prop } = myObject;

    // const myArr = [1, 2, 3]
    // const [a, b] = myArr;

    [a, b] = [b, a];
})();


console.log('A:', a, 'B:', b);

/*
12. Using the array below, get a variable that contains an array of objects structured like this:
[
  {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
  ...
]
*/
const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

function transformInObjects(classes) {
    const accumulator = [];
    for (let i = 0; i < classes.length; i++) {
        accumulator.push({
            subject: classes[i][0],
            time: classes[i][1],
            teacher: classes[i][2],
        })
    }
    return accumulator;
}
function objectify(arr) {
    let objClasses = [];
    arr.map((element) =>
        objClasses.push({
            subject: element[0],
            time: element[1],
            teacher: element[2],
        })
    );
    return objClasses;
}
console.log(objectify(classes))

const objClasses = [];

let arrayOfObjects = classes.map(elem => {
    return { subject: elem[0], time: elem[1], teacher: elem[2] }
});

/*     Adi ------       */
class TeachingClass {
    constructor(subject, time, teacher) {
        this.subject = subject;
        this.time = time;
        this.teacher = teacher;
    }
}

const objClasses = [];

const objClassesCreator = (classes, objClasses) => {
    classes.forEach(arr => {

        objClasses.push(new TeachingClass(...arr));
    });
}

objClassesCreator(classes, objClasses);
/*     End of Adi ------       */

const key = ['subject', 'time', 'teacher'];
// Marian Horoiu
const objClasses = classes.map((item) => {
    return item.reduce((accumulator, currentValue, currentIndex) => {
        accumulator[key[currentIndex]] = currentValue
        return accumulator;
    }, {});
});
console.log(objClasses);