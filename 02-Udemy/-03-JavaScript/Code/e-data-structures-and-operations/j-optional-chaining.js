const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//*********** ask the question is that thing is exist if not return undefined

//****  1) checking if the property is exist ?

console.log(restaurant.openingHours.mon.open);
// if mon is not exist the result will be error because undefined.open

// old solution
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// ES6 solution
console.log(restaurant.openingHours.mon?.open);
// now if the mon is not exist it won't return an error but undefined
//NOTICE if the property before the question mark does not EXIST it will return undefined
//NOTICE exist mean if it not undefined or null

//**** multiple opening chaining

// old way
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);

// ES6
console.log(restaurant.openingHours?.mon?.open);

//*******  Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open;
  // that is the brackets notation

  //--- set a default value
  const open2 = restaurant.openingHours[day]?.open || "closed";

  //--- solve the zero problem
  const open3 = restaurant.openingHours[day]?.open || "closed";

  console.log(`on ${day}, we open at ${open} `);
}

//*******  2) checking if the method is exist ?
console.log(restaurant.order?.(0, 1) ?? "method does not exist");
console.log(restaurant.orderBread?.(0, 1) ?? "method does not exist");

//**********  3) check if the array is empty

const users = [{ name: jonas, age: 22 }];

console.log(users[0]?.name ?? "user array empty ");
