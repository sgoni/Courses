var hello = 'Hello';
var hello = 'Hello +';
let World  = 'Hello World!!!!';
let World  = 'Hello';
const helloWorld = 'Hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(World);
    console.log(helloWorld);
}

anotherFunction();

/** */

const helloWorld = () => {
    globalVar = 'I am global';
}

helloWorld();
console.log(globalVar);

/** */

const anotherFunction = () => {
    var localVar = globalVar = 'I am global'; 
}

anotherFunction();
console.log(globalVar);