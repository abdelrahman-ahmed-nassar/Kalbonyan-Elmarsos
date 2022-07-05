"use strict";
/*
destructuring

is to break a complex data structure down into a smaller data structure like a variable. 

for arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.
*/

//*---------------- making variables from arrays

const arr = [2, 3, 4];
// without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with destructuring
const [x, y, z] = arr;
console.log(x, y, z);

// NOTICE the original array is not affected
console.log(arr);

const restaurant = {
  name: "classic Italian",
  location: "via angle 32",
  categories: ["Italian", "Pizzeria", "Organic", "Vegetarian"],
  starterMenu: ["Focaccia", "Garlic", "bread", "Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],
};

// store value form the array in two variables

const [first, second] = restaurant.categories;

//*------ skip one index with , ,

const [first2, , third] = restaurant.categories;

// NOTICE the naming here doesn't matter

//*------------------ switching two values
let main = 2;
let secondary = 4;

const temp = main;
main = secondary;
secondary = temp;

// with destructuring

[main, secondary] = [secondary, main];

//*--------------- getting two multiple values from a function

restaurant = {
  name: "classic Italian",
  location: "via angle 32",
  categories: ["Italian", "Pizzeria", "Organic", "Vegetarian"],
  starterMenu: ["Focaccia", "Garlic", "bread", "Salad"],
  mainMenu: ["pizza", "pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // now it will return an array
};

restaurant.order(2, 0);
// the result will be array with 2 values but we can do that

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
// give you two values

//*---------------------- nested destructuring

const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);
// result  2  [5, 6]

//? but if we want individual values

const [i, , [j, k]] = nested;
// result 2 5 6

//*-------- making default values when you don't know the length of an array

/*
case 
[b, q, r] = [8, 9]
8 9 undefined
*/
const [p = 1, q = 1, r = 1] = [9, 8];
// now the result will be  =>   9 8 1
