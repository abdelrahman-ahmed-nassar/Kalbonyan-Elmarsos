function logger() {
  console.log("my name is ali");
}

logger(); // calling or running or invoking function
logger();

// function can make manipulation to the data
// we put the parameters in the ()
function fruit(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruit(5, 0);

// now we should store the result of calling the function in a variable
const appleJuice = fruit(5, 0);
console.log(appleJuice);

// or you can log it directly
console.log(fruit(5, 0));

// keep your code dry
// Don't repeat your self

/****  function declaration  *****/

function calcAge1(birthYear) {
  return 2022 - birthYear;
}

console.log(calcAge1(2005));

/******  function expression  ********/

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

console.log(calcAge2(1991));

//! function is a value

//? what is the difference between the function declaration and the function expression

// the function declaration you can call it before you declare it
// in the expression function you can't

/************ the Arrow function [kind of expression] **********/

const calcAge3 = (birthYear) => 2037 - birthYear;

calcAge3(1991);
console.log(
  "🚀 ~ file: b-functions.js ~ line 60 ~ calcAge3(1991)",
  calcAge3(1991)
);

// accept one parameter and omit the return keyword
// but you can use {} after it and add more lines of code
// don't have its own keyword but it refers to  the parent
