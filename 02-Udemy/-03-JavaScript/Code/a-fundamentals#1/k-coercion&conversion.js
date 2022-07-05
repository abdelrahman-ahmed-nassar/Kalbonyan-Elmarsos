// *****************  type conversion

// when you want to change the type of some data manually
// * Number
const inputYear = "1991";
console.log(Number(inputYear) + 18);
// but the original value will still the same
console.log(inputYear);
// will give you a string ""1991"

console.log(Number("name"));
// will give you NAN (not a number)
// * String
console.log(String(23));

// *******  Booleans

/* 
[falsy value]
values will be converted to false when we try to convert it to boolean 
[ 0, "", undefined, null, NAN]
[truthy values]
any thing except this 5 like any number or any string 
*/
console.log(Boolean(0));
console.log(Boolean(1));

// ****************   Type Coercion (Type Casting) ************

/*
  - +
  - -
  - "" - 2
  - false - true
*/

let a = "10";
let b = 20;
let c = true;
let n = "ali";
/*
string + number = string 
string[with number in it ] - number = number 
string[with word in it ] - number = NAN 
*/
console.log(a + b); // 1020
console.log(+a + b); // 30
console.log(a - b); // -10
console.log(n - b); // NAN
console.log(typeof NAN); // number
console.log("" - 2); // -2
console.log(+""); //0
console.log(false - true); // -1
console.log(b + c); // 21
console.log(a + b + c); // 1020true
console.log(+a + b + c); // 31

// * game
let r = "1" + 1;
r = r - 1;
console.log(n);
// will be 10

console.log(2 + 3 + 4 + "5");
// will be 95

console.log("10" - "4" - "3" - 2 + "5");
// will be 15

// **************** type coercion with boolean
/*
[falsy value]
[ 0, "", undefined, null, NAN]
values will be converted to false when we try to convert it to boolean 

[truthy values]
any thing except this 5 like any number or any string  */

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
  // it will convert the number 0 to a false boolean value
} else {
  console.log("you should get a job!");
}
let height;
if (height) {
  // the undefined will be converted to false boolean
  console.log(" YaY! height is not defined");
} else {
  console.log("height is Undefined");
}
