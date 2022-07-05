// ****************** NUMBER  Method

// convert string -->  Number
console.log(Number("100"));
console.log(+"100");

// Number -->  string
console.log((100).toString());
console.log((100).toString());

// float  -->  the closest  number  as a string
console.log((100.5555555555).toFixed(2)); // the number refer to how many floated number you need
// 5 and more  give to the next Number

// string --> Integer and smart
console.log(parseInt("100.55")); // will give you 100   just
console.log(parseInt("100 ali")); // will give you 100

// string --> float  and smart
console.log(parseFloat("100.55")); // will give you 100.55
console.log(parseFloat("100.55 ali")); // will give you 100.55

// checking the type
console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100.55)); // false
console.log(Number.isInteger(100)); // true

console.log(Number.isNaN("ali")); //false
console.log(Number.isNaN("ali" / 20)); //true

// ***************** Math Object

// close to just the number after the float number
console.log(Math.round(99.3)); // will give 99
console.log(Math.round(99.5)); // will give 100

console.log(Math.ceil(99.5)); // will give 100
console.log(Math.ceil(99.2)); // will give 100

console.log(Math.floor(99.9)); // will give 99

console.log(Math.max(1, 324, 234, 345, 45, -192)); // give you the bigger number
console.log(Math.min(1, 324, 234, 345, 45, -192)); // give you the smaller number

console.log(Math.pow(2, 4)); // equal 2 ** 4

console.log(Math.random()); // give you a random number

console.log(Math.trunc(99.5)); // delete any number after the floating point and ignore it

// * Number challenge

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.round(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** parseInt(d)); // 10_000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Values
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(Math.floor(b) / Math.ceil(d)).toFixed(2)); // 67 => Number
