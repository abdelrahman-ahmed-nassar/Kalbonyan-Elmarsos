const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// looping over this array
for (const item of menu) console.log(item);
// the item we defined represent the current item in each iteration
// the result will be every item in the array logged individually
// NOTICE you CAN use the continue and the break
//*********  getting the index the item

for (const item of menu.entries()) {
  console.log(item);
  // now each item will be an array contain two values [the index, the value]
  // to print the data from that array
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log([...menu.entries()]);
// will be an array contain arrays in each position

// with destructuring
for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}
