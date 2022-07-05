/* 
the rest pattern use the spread operator to do the opposite of what it is doing 

the rest pattern make new array from values separated by commas 
*/

//********* 1) Destructuring

// Spread, because on the right side
const arr = [1, 2, ...[3, 4]];

// using destructuring with the rest pattern
// REST, because on left side
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);
// 1 2 [3, 4, 5, 6]

// NOTICE
/*
[1]
the rest pattern always must be the last

in the destructuring assignment

because otherwise how will JavaScript know

until when it should collect the rest of the array, right?

[2]
there can only ever be one rest

in any destructuring assignment, okay
*/

//*******  in objects

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

const { sat, ...weekdays } = restaurant.openingHours;
// that will create new object with all the opening hours property except the sat

//********  2) functions   rest argument

const add = function (...numbers) {
  // now that will make array with any number of argument you pass into it
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 7, 8);
add(8, 2, 5, 7, 8, 12, 6);
// now to make it accept an array again
const x = [23, 5, 7];
add(...x);

/*
So the spread operator is used

where we would otherwise write values, separated by a comma.

On the other hand the rest pattern is basically used

where we would otherwise write variable names

separated by commas.

So, again the rest pattern can be used

where we would write variable names, separated by commas

and not values separated by commas.
*/
