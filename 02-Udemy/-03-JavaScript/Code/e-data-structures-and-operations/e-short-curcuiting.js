// logical operator: Use ANY data type, return any data type, short-circuiting

//******  1) OR operator
console.log(3 || "jonas");
/*
result will be 3
don't have to be a boolean

for the OR operator 
*[return the first truthy value]
short circuiting means that if the first value is a truthy value, it will immediately return that first value.
if the first value is falsy it will take the second value
*/

console.log("" || "jonas");
// jonas
console.log(true || 0);
// true
console.log(undefined || null);
// null
console.log(undefined || 0 || "" || "hello" || 23);
// hello

//******  2) AND operator

// work the exact opposite value
// [return the first falsy value]
console.log(0 && "jonas");
// 0
// the and operator short-circuit when the first value if false and return tye first falsy value

console.log(77 && "jonas");
// jonas

console.log("hello" && 23 && null && "jonas" && undefined);
// null
