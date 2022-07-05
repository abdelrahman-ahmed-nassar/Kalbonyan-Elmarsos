/*
a closure is not a feature in JS that we use explicitly 
It's a concept in JS  that happen in some situations 

  closure is the closed over variable environment of the execution context in which a function was created even after that execution context is gone,

  a closure gives a function access to all the variables of its parent function. So the function in which it is defined even after that parent function has returned.

or let's say analogy is that a closure makes sure that a function does never lose connection to the variables that existed at the function's birthplace. It remembers the variables, even after the birthplace is gone. It's like a person who doesn't lose connection to their hometown.
*/

const secureBooking = function () {
  let passengerCount = 0;
  // cannot be manipulated or access from outside

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
//the secret is basically this. Any function always has access to the variable environment of the execution context in which the function was created. even after a debt execution context is gone.

console.dir(booker);
// to see the variable environment

//********** EXAMPLES
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 500;
  f = function () {
    console.log(b * 2);
  };
};

g();
// the result of calling that function is that a will 23 and f will be aa function
f();
// 46
console.dir(f);

h();
// reassign the value of f
f();
// 1000

console.dir(f);

//*********** TIMER
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} `);
};
boardPassengers(180, 3);

// NOTICE the closure have priority over the scope chain

const perGroup = 12230;
boardPassengers(160, 4);
