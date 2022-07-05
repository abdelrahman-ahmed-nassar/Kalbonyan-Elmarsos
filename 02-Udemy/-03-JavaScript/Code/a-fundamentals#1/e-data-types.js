/*
each value in js is either a [object data type ] or [primitive data type]
value can be primitive or objects 


[primitive data type] 

1-{number}  contain float and integer  is the same thing 
2-{string}  put them in quotes  doesn't matter double or single 
3-{Boolean} logical type   take  either true or false 

4-{undefined}  value taken by a variable that is not yet defined (empty value) 
5-{null}       also mean 'empty value'
6-{symbol}     values that is unique and cant be changed 
7-{BigInt}     larger integers than the number type can hold


dynamic typing 

javascript has a dynamic typing so unlike other language you don't have to define the type of every data you write , data types are determined automatically.  

notice that 
the value that inside the variable is the thing that have a type but the variable it self don't have a type it have the type of its value  
*/

// showing the type of the value with the typeof operator
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "string");

// changing the value of a variable

let firstName = "ali";
// now when changing don't use let or you will be redeclare the value and you will get error
// this process is called [reassigning the value]
firstName = "omar";

// defining a variable without a value
let year;
console.log(year); // will be undefined  [the value]
console.log(typeof year); // will be undefined  [the type]

console.log(typeof null); // will be object

// *  NUMBER
// syntactic sugar "_"

console.log(1000000);
console.log(1_000_000); // the console will ignore the underScore
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);

// Max value
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
// you can't add any thing to the max value

let ali = 1;
