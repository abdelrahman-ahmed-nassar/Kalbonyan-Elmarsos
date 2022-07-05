const arr = [7, 8, 9];
// want to create a new array based on that but with new element in the beginning

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badForNewArr);

// or with looping

let badForNewArr = [];
for (let i = 0; i < arr.length; i++) {
  badForNewArr.push(arr[i]);
}
badForNewArr.unshift(1, 2);

console.log(badForNewArr);

//******  ECMA 6    with (...) spread operator

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
// will be [1, 2, 7, 8, 9]

//So what the spread operator does is to basically take all the values out of this arr. array, and then write them individually as if we wrote seven, eight, nine here manually.
//  we can use the spread operator whenever we would otherwise write multiple values separated by commas.

// but if we do that
const newArr2 = [1, 2, arr];
// the result will be [1, 2, [7, 8, 9]]

//******* passing arguments into function
console.log(...arr);
// the result will be 1 2 7 8 9
// not [1, 2, 7, 8, 9]
// that is like writing
console.log(1, 2, 7, 8, 9);

//****** Example

const mainMenu = ["Pizza", "Pasta", "Risotto"];

const newMenu = [...mainMenu, "salad"];
// notice we are creating new array not manipulating the original

/*
Now, the big difference is that the spread operator

takes all the elements from the array

and it also doesn't create new variables.

And as a consequence, we can only use it

in places where we would otherwise

write values separated by commas.
*/

//******* shallow copy of an array
const mainMenuCopy = [...mainMenu];

//******** join two arrays
const starterMenu = ["salad", "bread"];
const endMenu = ["pizza", "chicken"];
const menu = [...starterMenu, ...endMenu];

//NOTICE
// the spread operator work just on iterables
// Iterables: arrays, strings, maps, sets
const str = "jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);
// result    ["j", "o", "n", "a", "s", "", "S."]

// NOTICE that we can still only use the spread operator when building an array,or when we pass values into a function.

// meaning
// console.log(`${...str} ali`);
// that won't work because this is not a place that expects multiple values separated by a comma.

//*** using the spread operator with multi argument function

const orderPasta = function (ing1, ing2, ing3) {
  console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
};

const ingredients = [
  prompt("let's make pasta! ingredient 1?"),
  prompt("let's make pasta! ingredient 2?"),
  prompt("let's make pasta! ingredient 3?"),
];
console.log(ingredients);
// will be an array of three strings

// old way
orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//new way
orderPasta(...ingredients);
