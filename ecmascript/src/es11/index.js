const button =  document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
});

const aBigNumber = 90007199254740991n
const anotherBigNumer = BigInt(90007199254740991n);

console.log(aBigNumber);
console.log(anotherBigNumer);

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

// Promise.allSettled
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))



// Global this
console.log(window);
console.log(globalThis);

// Elementos nulos
const foo = null ?? 'default string'
console.log(foo);

const foo = 'casi' ?? 'default string'
console.log(foo);

// Optional chaining
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail');
}
