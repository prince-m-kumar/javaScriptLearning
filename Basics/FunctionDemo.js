function isCountPrint(numberData) {
    for (let index = 0; index < numberData; index++) {
        console.log(index);
        }
    
}

isCountPrint(9);
console.log(isCountPrint.name);
// Function Defination
function printHello(name) {
console.log("Hello world " +name);    
}
function printHello1(name) {
    return `Hello ${name}`;  
}
console.log(typeof printHello);
//function Invocation
printHello();
//Function Parameter
printHello("prince");
printHello("prince","data");
//function return 
let result = printHello("kumar");
console.log(result);
let result1 = printHello1("kumar");
console.log(result1);

