"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // object inside the object
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// we use {} to destructuring the objects
// the order in the object doesn't matter
const { name, openingHours, categories } = restaurant;
// now we have 3 new variables with the same value of the object properties
console.log(name, openingHours, categories);

//*** changing the name of the variables
const { name: anyName, openingHours: hours, categories: tags } = restaurant;
console.log(anyName, hours, tags);

//****** making default values

// if we tried to access property that is not exist we will get undefined

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// we will get [], ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// because we set a default value
// but if there is a real value then logically that value will be applied

//************ mutating variables

let a = 111;
let b = 999;

const obj = {
  a: 23,
  b: 27,
  c: 14,
};

// now we won't switch the variables values with properties values

// NOTICE we cannot do that
// const { a, b } = obj;
// NOTICE we cannot do that
// because when we start a line with a {} js is waiting a code block from us in other words a statement and we can assign statement to a value
//  {a, b} = obj;

// to solve that
({ a, b } = obj);
console.log(a, b);
// will be 23, 7

//************  nested objects

// use this weird syntax
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// will be 11 23

// or you can even do that

// const {
//   fri: { open = o, close = c },
// } = openingHours;

//******** example of passing an object as a parameter when there are a lot of parameters and we don't know the order of them

const o = {
  orderDelivery: function ({ starterIndex = 1, time, address }) {
    // now that is like we have 3 parameters but we actually have one (an object) and then we destructure it into 3 variables and then used it
    // and we can also set a default values
    console.log(time);
    console.log(address);
    console.log(starterIndex);
  },
};
o.orderDelivery({
  // now we don't call the arguments with the order but instead with the names
  time: "22:30",
  address: "Via del sole",
  starterIndex: 2,
});
