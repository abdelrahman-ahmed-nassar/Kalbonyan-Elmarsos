// set timeout timer
// run just once after a defined time

// function receive a callback function
// the second argument is the amount of time it will wait in milliseconds
setTimeout(function () {
  console.log("here is your pizza");
}, 4000);
// NOTICE that don't stop the execution like the alert

//---- using arguments with this kind of call back function
const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  function (ing1, ing2) {
    console.log(`here is your pizza with ${ing1} and ${ing2}`);
  },
  4000,
  // "olives",
  // "spinach"
  ...ingredients
);

//------------ cancel the timer

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

//****************** set interval timer
// keeps running for ever every amount of time

// create clock
const clock = setInterval(() => {
  const now = new Date();
  console.log(
    Intl.DateTimeFormat("en-US", {
      minute: "numeric",
      hour: "numeric",
      second: "numeric",
    }).format(now)
  );
}, 1000);

//NOTICE
// this timers is special in execution
// you don't have to call it
// just if there is a variable contain a timer it will be executed
