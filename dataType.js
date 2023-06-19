// Task

let name = "Ilya";

console.log( `hello ${1}` ); // "hello 1"

console.log( `hello ${"name"}` ); // "hello name"

console.log( `hello ${name}` ); // "hello Ilya"

/////////////

let date = "Sunday";
console.log(typeof(message)); // "undefined"
console.log(date) // "Sunday"
//let name = "John";
console.log( `Hello, ${name}!` ); // Hello, John!
console.log( "Hello, ${name}!" ); // Hello, ${name}!

console.log( `the result is ${1 + 2}` ); // the result is 3
console.log( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

 
//Infintity

console.log( 1 / 0 ); //"Infinity"


//Undefined
let age  ;
console.log(age); // "undefined"

console.log (typeof (undefined));
console.log (typeof (foo)); //"undefined"
console.log (typeof (alert)); // "undefined"
console.log (typeof (1/NaN));// "Number"
console.log (typeof (NaN/1));// "Number"
console.log (typeof (bg));// "undefined"
console.log (typeof (xy1223));// "undefined"

//NaN

console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log( "not a number" / 2 - 1 ); // NaN


// Boolean
let isGreater = 4 > 1;
console.log( isGreater ); // true (the comparison result is "yes")
//let age = 100;
//console.log (typeof (true)) //"boolean"
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

//Bgint


console.log (typeof (10n)); // "bigint"

//Number
console.log (typeof (3)); // "number"

//string
console.log (typeof ("foo")); // "string"
console.log (typeof (`foo`)); // "string"

//symbole
console.log(typeof (Symbol("id"))); // "symbol"

//Object
console.log (typeof (Math)); // "object"
console.log (typeof (null)); // "object"
console.log (typeof (console)); // "object"

let x = String;
let n = 689;
//let y = true;
x = false;
n = NaN;
y = 1234567890123456789012345678901234567890//n

console.log(typeof(x)); // "Boolean"
console.log(typeof(x)); // "Function"
console.log(typeof("x")); // "String"

console.log(typeof(y)); // "bigint"
console.log(typeof(y)); // "Number"
console.log(typeof(Y)); // "undefined"
console.log(typeof(y)); // "boolean"

console.log(typeof(n)); // "Number"
console.log(typeof(n)); // "Number"