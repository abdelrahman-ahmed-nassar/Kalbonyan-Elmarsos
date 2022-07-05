//******  1) literal object
/*
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

*/
//*******  enhanced object literal

const openingHours = {
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
};
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //*******  1) declaring objects
  // old way
  openingHours: openingHours,

  //ES 6 enhanced object literal
  openingHours,
  // that is just the same
  // NOTICE if you change the original one it wil change here because the two variables refer to the same object

  //*****  2) enhanced methods

  // old way
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex]], this.mainMenu[mainIndex];
  },

  // ES 6 enhanced way
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex]], this.mainMenu[mainIndex];
  },

  //*****  compute properties names with [] brackets notation
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [`day-${3 + 2}`]: 10,
};
