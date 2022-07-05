/*
operator basically allows us to transform values

or combine multiple values

and really do all kinds of work with values.
*/

// ***************  [mathematical operator] ************
/*
[1][+] addition 
[2][-] subtraction 
[3][*] multiplication 
[4][/] division
[5][**] exponentiation (ES7)
[6][%] module 

*/
console.log(10 + 20);
console.log(10 + "ali");
// will deal with with the + sign as a concatenating operator and convert the number into string an print a string as an output
console.log(10 - "ali");
// will give you  [NAN]  not a number
console.log(typeof NAN); // will be a number
console.log(10 * 20);
console.log(20 / 5);
console.log(2 ** 4); // like 2 * 2 * 2 * 2
console.log(11 % 2); // will be 1

// *****************  [the assignment operator]  *******************

/*
happen from right to left 

[1][=]  
[2][+=]
[3][-=]
[4][*=]
[5][/=]

++ increment  [ post / pre]
-- decrement  [ post / pre]
==
===
*/
let z = 10 + 5;
z += 10; // z = z + 10
z *= 10; // z = z * 10
z /= 10; // z = z / 10

let x = 10 + 5;
console.log(x++);
// mean x = x + 1
// will print with the current value first and then add the value
console.log(++x);
// will add the value then print

console.log(x--);
// x = x - 1
// will print first and then add the value
console.log(--x);
// will add the value then print

//  *******************   [comparison operator] *************

// produce boolean values  and have a less precedence that the mathematical 

console.log(ageAli > ageOmar);
// will return a boolean value like asking the browser is ageAli is bigger the ageOmar
console.log(ageAli < ageOmar);
console.log(ageAli >= ageOmar);
console.log(ageAli <= ageOmar);

// you can store the value
const ifFullAge = ageAli > ageOmar;

//***************   [operator precedence]   ***************** 

const now = 2037;
const joAge = now - 1991;
const sarahAge = now - 2018;

console.log(now - 1991 > now - 2018);

/* visit
http://www-lia.deis.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence.html 
*/


// **************** [equality operator] **********

//->  return a boolean value after make comparison

// [the loose equality] ==  perform type coercion ->  avoid it as possible as you can
// [strict equality  Identical operator] ===     don't perform  type coercion
//[Not equal  loose version] !=
//[Not equal  strict version] !==
const age = 18;
if (age === 18) {
  console.log("you just became an adult");
}
18 === 18; // true
18 === "18"; // false

18 == 18; //true
18 == "18"; //true

9 !== 18; // true
9 !== "9"; //true
9 != 9; // false

9 != 18; // true
9 != "9"; // false
9 != 9; // false
const favorite = Number(prompt(" what's your favorite number ? "));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log(`cool! ${favorite} is amazing number `);
}
// ********************  [logical operator ]

// you can make conditions and comparison more specific by using the logical operator 

// this operators return booleans 

// * in comparing

const hasDrivesLicenses = true; //A
const hasGoodVision = true; //b

// [1] [&&] ==> and

console.log(hasDrivesLicenses && hasGoodVision); // true
console.log(10 > 6 && 10 == "10" && 10 >= 50); // will be false

// [2] [||]  ==>  OR
hasDrivesLicenses = true; //A
hasGoodVision = false; //b

console.log(hasDrivesLicenses && hasGoodVision); // false
console.log(hasDrivesLicenses || hasGoodVision); // true

// [3]  [!]  ==> NOT     will reverse its value

console.log(true);
console.log(!true); // will be false

console.log(!(10 == "10")); // will be false

hasDrivesLicenses = false; //A
hasGoodVision = true; //b

console.log(!hasDrivesLicenses); // true
console.log(!hasDrivesLicenses); // false

// * in conditions
if (hasDrivesLicenses && hasGoodVision) {
  console.log(" you are able to drive!");
} else {
  console.log("someone else should drive");
}

const isTired = true;
// we dont her to be tired
if (hasDrivesLicenses && hasGoodVision && !isTired) {
  console.log(" you are able to drive!");
} else {
  console.log("someone else should drive");
}

// *************** [conditional operator] [ternary operator]
// [?]
const theAge = 23;
age >= 18 
  ? console.log(`I like to drink wine`)
  : console.log(`I like to drink water`);

//? that is like
if (age >= 18) {
  console.log(`I like to drink wine`);
} else {
  console.log(`I like to drink water`);
}
age = 1;
// the unique in the conditional operator is that its make an expression meaning it produce a value and this value can be stored in a variable

const drink = age >= 18 ? "wine" : "water";
console.log(`${drink}`); // wine

// with if    it will look like that

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

// now because the conditional operator is an expression it can be in the template literal  unlike the if statement

console.log(`I like to drink${age >= 18 ? "wine" : "water"}`);

bill = 200;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `the bill was ${bill}, the trip was ${tip},  and the total value ${
    bill + tip
  }`
);


// you can declare a variable in it and that variable will be in the global scope 