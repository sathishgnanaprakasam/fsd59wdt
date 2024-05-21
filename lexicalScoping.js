/*
    Lexical Scoping: 

    - Lexical scoping (sometimes known as static scoping ) is a convention used with many programming languages that sets the scope (range of functionality) of a variable so that it may only be called (referenced) from within the block of code in which it is defined.
    - Lexical scoping is a way to resolve the value of a variable by looking at the location where the variable was declared within the code.
*/

/*
    class: 

    - collection of objects
    - class is a blueprint for creating objects or templates for creating objects
*/

// using function prototype
// function Person(name) {
//     this.name = name;
// }

// let person1 = new Person('John');
// let person2 = new Person('Jane');

// console.log(person1);
// console.log(person2);

/*
    person1 = Person {
        name: 'John'
    }

    person2 = Person {
        name: 'Jane'
    }
*/

class Person {
    constructor(name) {
        this.name = name;   
        console.log(this);
    }
}

let person1 = new Person('John');
let person2 = new Person('Jane');

// console.log(person1);
// console.log(person2);