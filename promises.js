// Overview of promises

function asyncFunc( number ) {
    return new Promise(
        function ( resolve, reject) {
             if(number === 1){
                 resolve('promise resolved , received 1 as parameter value');
             }   else {
                 reject(new Error('Promise rejected, only accepts 1 as parameter'));
             }
        }
    );
}

// Use of the function that returns the promise
// Calling two return promise-functions  with no sequence order
console.info('Calling asyncFunc(1)');
asyncFunc(1)
    .then( function (data) {
        console.info(data);
    })
    .catch( function(error) {
        console.error(error);
    })

console.info('Calling asyncFunc(2)');
asyncFunc(2)
    .then ( function ( data ) {
        console.info(data);
    })
    .catch ( function ( error ){
        console.error(error);
    });

// Chaining then() calls
// Calling two return promise-functions  with sequence order
console.info('Calling asyncFunc(1)');
asyncFunc(1)
    .then ( function ( data ) {
        console.info(data);
        console.info('Calling asyncFunc(2)');
        return asyncFunc(2);
    })
    .then ( function ( data ) {
        console.info(data);
    })
    .catch (function ( error ) {
        console.error(error);
    })


