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
console.log(one instanceof Number); // Literal 
console.log(str instanceof String);
console.log( b instanceof Boolean);
console.log(personName instanceof Object);
console.log(sayHello instanceof Function);
console.log(two instanceof Number); // Number constructor  

///////////Math/////////////////
let num1 =100;
console.log("_______Basics Math___________")
console.log(num1%1500);
console.log(num1/1500);
console.log(num1++);
console.log(num1--);

console.log("__________Using math object_________");
console.log(Math.PI);
console.log(Math.sqrt(num1));
console.log("__________Convert number to string and vise versa_________");
let flo1 = '1.50';
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('OXF'));
console.log(parseInt('0xF'));

console.log("********Converting strings to float********");
//Converting strings to float
console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));

console.log("********More Conversion Examples********");
//More Conversion Examples
//Numbers after special characters are ignored
console.log(parseInt('1.5')); 
console.log(parseInt('1 + 1'));

//Using Template Literals
console.log(parseInt(`${1 + 1}`));

console.log("********Converting numbers to strings********");
//Converting numbers to strings
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());