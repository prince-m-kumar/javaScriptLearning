const place = "World";
const greeting = "hello";

console.log("Hello, %s", place );
console.log("Hello world");

console.log(`${greeting}, ${place}`);
// Template Literals
console.log(`${greeting}, ${place}`);
console.log(`this is data ${greeting} is ${place}`);
console.log(`1 + 1 is ${1 + 1}`);

// Checking Type
// typeof operator and instanceof operator
const people = ["Aaron", "Mel", "Jphn"];
const one = 1;
const two = new Number(2);
const str = "Hello world";
const b=true;
const personName = {
    firstName : "prince",
    lastName : "kumar"
}

function sayHello(personName){
    console.log("Hello" +personName.firstName);
}

console.log("type of------");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof personName);
console.log(typeof sayHello);

console.log("Instance of------");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log( b instanceof Boolean);
console.log(personName instanceof Object);
console.log(sayHello instanceof Function);
console.log(two instanceof Number);