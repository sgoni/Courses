const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
         ? setTimeout(() => resolve('Do Something Async'), 3000)
         : reject(new Error('test Error!!!'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

/**
 * 
 */
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    }
    catch (error) {
        console.error(error);
    }
}

console.log('Before anotherFunction');
anotherFunction();
console.log('After anotherFunction');