"use strict";
/*
if we need to make a function that can be executed just once and then we can't execute it again this is the invoked function 
we put the function without assigning it to a variables between parentheses and call it at the same time after the parentheses so it won't  be executed again 


function creates scopes 
variables created with let or const create their own scope 
*/

// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();
// console.log(isPrivate);
// can't be accessed

(() => console.log("This will ALSO never run again"))();

//***   ECMA 6 new way for protecting data and encapsulation
//      block scope with let or const
{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(isPrivate);
// undefined
console.log(notPrivate);
