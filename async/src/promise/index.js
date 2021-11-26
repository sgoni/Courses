const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!!');
        } else {
            reject('Whoop!!!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error));

/**
 *  
 * */ 

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {                
                resolve('true');
            }, 2000)
        } else {
            const error = new Error('Whoop!!!');
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.log(error));

/**
 * Running several promises.
 */

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => { 
        console.log('Array of results', response);
    })
    .catch(error => {
        console.error(error);
    });
