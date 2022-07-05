const age = 19;
const isOldEnough = age >= 18;
// put an expression in the parentheses
if (isOldEnough) {
  //the condition between the()mean if the variable is a true after the type coercion
  console.log(" ali can start driving license");
}

// if the condition is one line you can use the if like that 
age = 22; 
if (age > 18) console.log(`you are an adult`);


// this next structure is called a if else control structure
if (age >= 18) {
  // you can write the condition
  console.log(" ali can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`ali is too young, wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

// you can use more than one condition  by using  else if

const birthYear2 = 1991;
let century2;
if (birthYear <= 2000) {
  century2 = 20;
} else if (century2) {
  century2 = 21;
} else {
  console.log("don't care ");
}

//! if you declare a variable in the if statement it won't be in teh global scope and you can't use it outside of the statement     but you can declare a variable outside of the statement and then reassign it in the statement 



// **************** type coercion with boolean
/*
[falsy value]
[ 0, "", undefined, null, NAN]
values will be converted to false when we try to convert it to boolean 

[truthy values]
any thing except this 5 like any number or any string  */

const money = 0;
if (money) {
  // it will convert the number 0 to a false boolean value
  console.log("Don't spend it all ;)");
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

// * logical operator  in conditions
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

// ************ challenge
const scoreDolphins = (96 + 180 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("koalas win the trophy");
} else {
  console.log("both win the trophy  (withdraw)");
}
// * adding a minimum score

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
} else {
  console.log("No one wins the trophy");
}

// *************** [conditional operator] [ternary operator]
// [?]
//!  Its an expression not a statement
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

//! you can put more then condition in the ternary operator

let mrAge = 30;

mrAge < 20
  ? console.log(20)
  : mrAge > 20 && mrAge < 60
  ? console.log(`20 to 60`)
  : mrAge > 60
  ? console.log(`larger then 60`)
  : console.log("unknown");
