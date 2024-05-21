let promise = new Promise((resolve, reject) => {
    // perform an operation
    let x = 10;
    let y = 20;

    let sum = x + y;

    // if the operation is successful
    resolve(sum);
    // else if the operation fails
    // reject();
})

promise
    .then(
        (sum) => {
            console.log(`resolved with the sum of ${sum}`);
        }
    )
    .catch(
        () => {
            console.log('rejected');
        }
    )
