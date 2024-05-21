// let numbers = [3, 4, 5, 6];

// // callback function
// function squarer(x) {
//     return x ** 2;
// }

// console.log(numbers.map(squarer));

// [9, 16, 25, 36]


let numbers = [1, 2, 3, 4];

const func = (value, index, array) => {
    console.log(value, index, array, array[index]);
}

numbers.map(func);