// // declaring a variable called `x` using var
// var x;

// // assigning a value to the variable `x` or initializing the variable `x`
// x = 10;

// Note: updating a variable with var keyword
// // declaring a variable called `x` using var and initializing it with a value of 10
// var x = 10;

// // updating the value of the variable `x` to 20
// x = 20;

// console.log(x); // 20

// Note: redeclaring a variable with var keyword
// declaring a variable called `x` using var and initializing it with a value of 10
// var x = 10;

// // redeclaring the variable `x` using the var keyword
// var x = 'twenty';

// console.log(x); // twenty

// Note: updating a variable with let keyword
// let x = 10;

// // updating the value of the variable `x` to 20
// x = 20;

// console.log(x); // 20

// Note: redeclaring a variable with let keyword
// let x = 10;

// // redeclaring the variable `x` using the let keyword
// let x = 'twenty';

// console.log(x); // SyntaxError: Identifier 'x' has already been declared

// const x;

// x = 10;

// console.log(x); // 10

// const x = 10;

// x = 20; // TypeError: Assignment to constant variable.

// console.log(x); // 10

// const x = 10;

// const x = 20; // TypeError: Assignment to constant variable.

// console.log(x); // 10

// var x = 10;

// let x = 20;

// console.log(x);



// let x = 10; // global scope


// {
//     // block scope
//     console.log(x);
// }

// let x = 10; // global scope

// if (true) {
//     let x = 20; // block scope
//     console.log(x); // 20
// }

// console.log(x); // 10

// if (true) {
//     let x = 20; // block scope
//     console.log(x); // 20
// }

// console.log(x); // ReferenceError: x is not defined


// if (true) {
//     var x = 20; // function scope
//     console.log(x); // 20
// }

// console.log(x); // 20

// function printX() {
//     var x = 10; // function scope
//     console.log(x); // 10
// }

// printX();
// console.log(x); // ReferenceError: x is not defined

// i block scoped
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }
    
// console.log(i);

for (var i = 1; i <= 10; i++);
console.log(i); // 11
