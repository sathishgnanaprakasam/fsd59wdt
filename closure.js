// create an outer function
function outer() {
    // create a variable in the outer function context
    let x = 5;

    // return the inner function
    return inner;

    // create an inner function
    function inner() {
        // access the outer function's variable
        console.log(x);
    }
}

// outer function call returns the reference to the inner function
const innerFunction = outer();

innerFunction();