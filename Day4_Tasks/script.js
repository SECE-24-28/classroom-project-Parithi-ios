console.log('hiii')

var a = 10;
console.log("The value of a is: " + a);

var a = 12;                                      //re-declaration
console.log("The value of a is: " + a);

a = 14;                                          //re-assignment
console.log("The value of a is: " + a);

let b = 1;
console.log("The value of b is: " + b);

//let b = 1;   re-declation causes error
b=2;
console.log("The value of b is: " + b);

const c = 20;
console.log("The value of c is: " + c); 

//const c = 22;  
//c=24;       re-declaration and re-assignment causes error

let name = "Alice";
let age = 22;
let isStudent = true;
let x;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof x);
