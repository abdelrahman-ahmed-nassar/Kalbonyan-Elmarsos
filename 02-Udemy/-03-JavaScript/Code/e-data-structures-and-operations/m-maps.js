/*
map is like the dictionary in python

the big difference between the objects and the maps 
is in maps the key can be in ANY type but in objects it must be string 

*/

const rest = new Map();

//******  add kay pairs to the map
rest.set("name", "classic Italian");
rest.set(1, "Firenze Italy");

// calling the method doesn't only update the map but also call it
console.log(rest.set(2, "Lisbon portugal"));
// the result will be the map updated

// according to that fact we can do like that
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

//*******  retrieve data from a map
// we write the name of the key and it will give us the value
rest.get("name");

const time = 21;
rest.get(time > rest.get("open") && time < rest.get("close"));
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//****** Check if the map have a key
console.log(rest.has("name"));

//***** delete a key pair
console.log(rest.delete(2));

//****** size of the map
console.log(rest.size);

//******** use various data type as keys

rest.set([1, 2], "Test");

console.log(rest.get([1, 2]));
// NOTICE that wont work
// because the object in the map is not the same object we define
// the map is block scope
// they are different in the heap

//--- to make it work
const arr = [1, 2];
rest.set(arr, "Test2");
console.log(rest.get(arr));

//******  Work with DOM elements
rest.set(document.querySelector("h1")), "heading";

console.log(rest);
