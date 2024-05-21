/*
    Rest operator

    - Syntax: ...
    - Rest operator is used to collect all remaining elements into an array
    - can be used in function parameters or destructuring assignment
*/

// Example 1: Rest operator in function parameters

// we don't know how many arguments will be passed to the function

// function add(...nums) {
//     console.log(nums);
// }

// add(5, 6, 7, 8, 9, 10);

// Example 2: Rest operator in destructuring assignment

/*
    destructuring: assigning values to variables from arrays or objects
*/

// let sides = [4, 5, 6];

// // without destructuring
// // let sidea = sides[0];
// // let sideb = sides[1];
// // let sidec = sides[2];

// // with destructuring
// let [sidea, sideb, sidec, ...rest] = [4, 5, 6, 7, 8];

// console.log(sidea, sideb, sidec, rest);

// destructuring objects

// let Person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// // console.log({ ...Person });

// let { name, age, city } = Person;

// console.log(name, age, city);

// console.log(Person.name, Person.age, Person.city);

// let Person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }

// let { name, age, city: location } = Person;

// console.log(name, age, location);

// Object property shorthand

let name = 'John';
let age = 30;
let city = 'New York';

// let Person = {
//     name: name,
//     age: age,
//     city: city
// }

let Person = {
    name,
    age,
    city
}

console.log(Person);