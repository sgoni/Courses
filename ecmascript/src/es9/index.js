const obj = {
    name: 'Steven',
    age: 45,
    country: 'CR'
};

//es6
//let { name, age, country } = obj;
//console.log(name, age, country);

//es9
let { name, ...all } = obj;
console.log(name, all);

let { country, ...all } = obj;
console.log(all);

// Spread

const obj = {
    name: 'Steven',
    age: 45
};

const newObj = {
    ...obj,
    country: 'CR'
};

console.log(newObj);

// Promise..finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world!!!'), 3000)
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))    
    .finally(() => console.log('Finalizo'));

// Regex    
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-26');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);


var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
  });
  var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
  });
  var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
  });
  var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
  });
  var p5 = new Promise((resolve, reject) => {
    reject("reject");
  });
  
  Promise.all([p1, p2, p3, p4, p5]).then(values => {
    console.log(values);
  }, reason => {
    console.log(reason)
  });