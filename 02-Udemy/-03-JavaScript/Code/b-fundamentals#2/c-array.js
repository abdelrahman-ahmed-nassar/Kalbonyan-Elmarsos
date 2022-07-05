let myFriends = ["ahmed", "Mohamed", "omar"];

// other way

const years = new Array(1991, 1984, 2008, 2020);

// getting data from the array

console.log(`hello ${myFriends[0]}`); // ahmed

console.log(`hello ${myFriends[0][4]}`); // d

// nested array
myFriends = ["ahmed", "Mohamed", "omar"[("ali", "jon")]];

console.log(`Hello ${myFriends[3][0]}`); // ali
console.log(`Hello ${myFriends[3][0][2]}`); // i

// modifying array
myFriends[1] = "adam";
myFriends[2] = ["josef", "ali"];

//! if you made the array with const keyword then you can't change it as a whole but you can change the data in it or add data or remove data

const year = ["2000", "2001", "2002", "2003"];

// now you can do that
year[3] = "3000";

// but you can't do that
year = ["1000", "2000"];

console.log(typeof myFriends); // ==> object

console.log(Array.isArray(myFriends)); // ==> checking   will give you true

//* length

console.log(myFriends.length); // show the number of the items in the list

// when write an index does not exist will make it in the index you choose and the give the un chosen items with empty value

console.log(myFriends.length); // 4
myFriends[7] = "last"; // will make three empty items then one after them

console.log(myFriends.length); // 8

// adding item to the end of the list
myFriends[myFriends.length] = "ali";

//* change the last item
myFriends[myFriends.length - 1] = "ali";
// determine the number of the items in the array
myFriends.length = 3;

// ******************* array methods

let numbers = ["one", "two", "three", "four", "five"];

// [1]  adding to the start of the array

numbers.unshift("first", "second");

// if you store the function in a variable its value will be the new length of the array

// [2] adding to the end of the array

numbers.push("before the last", "last");

// if you store the function in a variable its value will be the new length of the array

// [3] remove the first element and you can  store it in a variable

numbers.shift();
let firstNumber = numbers.shift();

// if you store the function in a variable its value will be the removed element

// [4] remove the last element and you can store it in a variable

numbers.pop();

// if you store the function in a variable its value will be the removed element

// ** searching in the array

//! the searching methods use the strict equality

console.log(numbers.indexOf("one"));
// searching from the list and if there more than item with the value one will give you the first one

// searching from an specific index
console.log(myFriends.indexOf("one", 2));

// searching from the last but give you the normal index
console.log(myFriends.lastIndexOf("three"));

// search from a specific point
console.log(myFriends.lastIndexOf("three", -2));
// start from the -2 and go to 0

// checking if the array have an element or not and return a boolean
console.log(numbers.includes("two")); //true
console.log(numbers.includes("two", 1)); //start from 2

//! when searching for a not existed item will give you index -1

numbers.indexOf("vv"); // -1

//* sorting array
let sort = [10, "ali", -20, "omar", 23, 1000, "adam"];
// will deal alphabetically
myFriends.sort();

// reversing the array but not sorting it
myFriends.reverse();

// twice
myFriends.sort().reverse;

//***********************  slicing array
myFriends = ["ahmed", "Mohamed", "omar", "ali", "adam"];

// take the first and the end
console.log(myFriends.slice()); // from index 0 to end
console.log(myFriends.slice(1)); // from index 1 to end
console.log(myFriends.slice(1, 3)); // not including the end from 1 to 2 index

console.log(myFriends.slice(-3)); // from omar to the end
console.log(myFriends.slice(1, -2)); // not including the end   => mohamed and omar

console.log(myFriends.slice(-4, -2));

//! not changing the main array but making a new array

// deleting or adding items to the array
//! change the array
myFriends.splice(0, 0, "jon", "maria");
//start index , deleting items, adding items
myFriends.splice(0, 1, "jon", "omar");
// adding one element and then adding the new elements

//*  join arrays
let number1 = [1, 2, 3];
let number2 = [4, 5, 6];
let number3 = [7, 8, 9];

let allNumbers = number1.concat(number2, number3, 10, [11, 12], "item");

// making array element as one string
allNumbers.join(" "); // giv the separator

("use strict");

//**   challenge 1

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
console.log(my.reverse().slice(--counter, my.length));
// ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(
  my
    .reverse()
    .slice(++zero, ++counter)
    .reverse()
); // ["Elham", "Mazero"]
my.push("Elzero");
console.log(my[my.length - zero]); // "Elzero"

console.log(`${my[zero][++counter]}${my[zero][counter + zero].toUpperCase()}`); // "rO"
