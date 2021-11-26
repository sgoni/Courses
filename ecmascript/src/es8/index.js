const data = {
    frontend: 'Jose',
    backend: 'Steven',
    desing: 'Fulano'
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values

const data = {
    frontend: 'Jose',
    backend: 'Steven',
    desing: 'Fulano'
};

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '   -----'));


const obj = {
    frontend: 'Jose',
    backend: 'Steven',
    desing: 'Fulano'
};

// Async y await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction =  async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();