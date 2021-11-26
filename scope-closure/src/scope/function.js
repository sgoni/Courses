const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();
console.log(fruit);

/**
 * 
 */

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    //let y = 2;

    console.log(x);    
    console.log(y);
}

anotherFunction();

/**
 * 
 */

const anotherFunction = (param) => {
    console.log(param);    
}

anotherFunction('Soy un parametro!!!');

/**
 * 
 */

anotherFunction = (param) => {
    console.log(param);    
}

anotherFunction('Soy un parametro!!!');

/**
 * 
 */

function anotherFunction(param) {
    console.log(param);    
}

anotherFunction('Soy un parametro!!!');