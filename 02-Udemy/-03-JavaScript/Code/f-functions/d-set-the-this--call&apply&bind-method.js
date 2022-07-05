"use strict";

//******* set the THIS keyword manually
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    //array of objects
  },
};
lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
// the this keyword  in methods refer to the object

//New arline
const euroWings = {
  airline: "EuroWings",
  iataCode: "EW",
  bookings: [],
  // we won't copy the methods
};

// global function that we can use in all objects
const book = lufthansa.book;
// Does NOT work because the this method inside it will be undefined
// book(23, 'Sarah Williams');

//******** Explicitly tell js what the this keyword refer to

//**** Call method
// define what is the this keyword refer to
// function.call(what this refer to , parameters)
book.call(euroWings, 23, "Sarah Williams");
console.log(euroWings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

// New airline
const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

//*********  Apply method   (for passing arrays)
// does not receive a list of argument after the this keyword
// but instead it's take an array of the arguments
const flightData = [587, "George"];
book.apply(swiss, flightData);
console.log(swiss);

// NOTICE the apply method is'nt used any more because we can do that
book.call(swiss, ...flightData);
console.log(swiss);

//************ bind method

//*********** create new function where the this key word refer to a certain object
//NOTICE the bind method does not call the function
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "steven");
console.log(euroWings);

//************  set argument in a single function and use it without the that argument

const bookEW23 = book.bind(euroWings, 23);
// now you don't have to write the first argument because it's pre defined
bookEW23("jonas");
console.log(euroWings);

bookEW23(22, "jonas");

// now the name will be 22  because we have defined the flightNum

/*
this is actually a common pattern called partial application.

So essentially, partial application means that a part of the arguments of the original function are already applied, */

//********** With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);

// won't work because in the event listener the this keyword point to the element itself

//--- solve the problem by setting the this keyword manually
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
// (buyPlane.bind(lufthansa)) will be the same method but with the this key word refer to lufthansa
// we used bind  not  call  because we want to return a function not to call it

//******** Partial application
// presetting parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// the null is standers for THIS keyword if we won't use it
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
