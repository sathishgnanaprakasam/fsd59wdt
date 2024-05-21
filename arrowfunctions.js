/*
    Functions: a block of code that can be called and executed later.

    Types:

    1. Library functions: functions that are built into the language.
    2. User-defined functions: functions that are created by the user.

    User-defined functions can be created in the following ways:

    1. named functions
    2. anonymous functions or nameless functions or function expressions
        a. function keyword
        b. arrow functions
        c. IIFE (Immediately Invoked Function Expression)
*/

// Named function
// function sayHello() {
//     console.log('Hello');
// }

// sayHello();

// anonymous function or nameless function or function expression
// using function keyword
// const sayHello = function () {
//     console.log('Hello');
// }

// sayHello();

// arrow functions
// const sayHello = () => {
//     console.log('Hello');
// }

// sayHello();

// arrow functions with one line of code
// one-liner arrow functions
// const sayHello = () => console.log('Hello');

// sayHello();

// IIFE (Immediately Invoked Function Expression)
// (() => {
//     console.log('Hello');
// })();

(function () {
    console.log('Hello');
})();