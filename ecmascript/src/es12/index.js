//  Replace y ReplaceAll

const string = "Hello world!!!! Hello world!!!! Hello world!!!!";

const replacedString = string.replace("Hello", "Goodbye");
console.log(replacedString);

const replacedString2 = string.replaceAll("Hello", "Goodbye");
console.log(replacedString2);

// Metodo Private

class Message {
    #show(val) {
        console.log(val);
    };

    get #add(val) {

    }
}

const message =  new Message();
message.show('Hello world!!!!')

// Promise Any

const promise1 = new Promise((resolve, reject) => reject("RechazadoS"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve 1"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

// WeakRef

class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);