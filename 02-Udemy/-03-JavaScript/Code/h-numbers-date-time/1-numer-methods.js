// all numbers in JavaScript is represented as floating points
console.log(23 === 23.0);

// normal math is 10 base
// 10 / 3

// numbers are binary base  0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
// false

//-------------------  convert string into number
console.log(Number("23"));

// unary system [type coercion ]
console.log(+"23");

//-------------------  parsing
// convert string into number in advanced way

//  NOTICE the string should start with number

console.log(Number.parseInt("  30.4px  ", 10));
// second argument is the counting base [radix]
// 30  ==> number  => int

console.log(Number.parseFloat("  30.4px  ", 10));
// 30.4

// you can call this function without the number object but don't do that

//------------------- Check if value is NAN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
// false
console.log(Number.isNaN(23 / 0));
// give infinity

console.log(Number.isNaN(+"adam"));
// true

//----------------- check if the value is number [the best way]
console.log(Number.isFinite(20));
//true
console.log(Number.isFinite("20"));
// false
console.log(Number.isFinite(+"20X"));
// false
console.log(Number.isFinite(23 / 0));
// false

//--------------- check if the value is integer
console.log(Number.isInteger(20));
// true
console.log(Number.isInteger(20.0));
// true
console.log(Number.isInteger(20.2));
// false

//-------------- get the square rout
console.log(Math.sqrt(4));
// 2
console.log(Math.sqrt(16));
// 4

// other way
console.log(16 ** (1 / 2));

//------ the cube rout
console.log(8 ** (1 / 3));

//-------------------- get the max value
// do type coercion but not parsing
console.log(Math.max(5, 11, 23, 18, 27, "66"));
// 66
console.log(Math.max(5, 11, 23, 18, 27, "66px"));
// NAN

//-------------------- get the min value
console.log(Math.min(1, 5, 6, -1, 7, "-100", 83));
// -100

//--------------------  getting the constant
console.log(Math.PI);
//3.141592653589793

// calc the area of circle
console.log(Math.PI * Number.parseFloat("10px") ** 2);

//------------- getting random numbers
console.log(Math.random());
// number between 0 and 1

// dice
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1
//0....(max - min)
//0 + min ..... (max -min + min)
// min....max

console.log(randomInt(10, 20));
//--------------- remove any decimal numbers

// do type coercion
console.log(Math.trunc(23.4));
console.log(Math.trunc("23.9"));
// 23

//---------------- round the number like in normal math

// do type coercion
// 5 and more make the number++
console.log(Math.round(23.3));
// 23
console.log(Math.round("23.5"));
// 24

//---------------- round the number to a higher value

// do type coercion
console.log(Math.ceil(23.3));
// 24
console.log(Math.ceil("23.6"));
// 24

//---------------- round the number to a lower value

// do type coercion
console.log(Math.floor(23.9));
// 23
console.log(Math.floor("23.2"));
// 23

//? what is the difference between floor and trunc

// they do the same when we deal with positive numbers

console.log(Math.trunc(-10.4));
// -10

console.log(Math.floor(-10.9));
//  -11

//----------------  rounding decimal
console.log(+(2.7).toFixed(0));
// [1] return a string so you have to convert it to a number
// [2] you can define how many decimal part should be in the string
console.log(+(2.7).toFixed(3));
// 2.700
console.log(+(2.734345).toFixed(3));
// 2.734
