/*
set is basically 

[1] collection of unique values. So that means that a set can never have any duplicates.

[2] new Set(any iterable )

[3] the set is iterable 
---- Iterables: arrays, strings, maps, sets

[4] the order of elements in it is not relevant 

[5] in sets theres NO indexes 




*/
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);
// all the duplicates will gone

console.log(new Set("jonas"));
// will be a set of all the letters because the string is iterable

//*****  the size of the set
console.log(orderSet.size);

//********* check if the element is exist
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

//******* add element to a set
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
// the second will ignored

//******* delete element from a set
orderSet.delete("risotto");

//****** delete all elements in the set
// orderSet.clear();

//*******  getting elements from a set
// there is no way because there is no need

//******** looping over a set
for (const order of orderSet) console.log(order);

//**********  example
//the main use case of sets is actually to remove duplicate values of arrays.

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// clear the duplicate values
const staffUniqueSet = new Set(staff);
// now it will be unique set
console.log(staffUniqueSet);

// but we want it to be an array

const staffUniqueArray = [...staffUniqueSet];
console.log(staffUniqueArray);
