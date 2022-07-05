const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const john = new Person("John", 1990);

// every function in js have a property called prototype [an object]
/*
Now every object that's created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property.
*/
Person.prototype.calcAge = function () {
  this.age = new Date().getFullYear() - this.birthYear;
};

console.log(Person.prototype);
// will be an object with the calc age function

// every instance created by the constructor function will have access to the methods and properties defined on the prototype

//--  so although the instances don't have the methods and properties defined on the prototype, they will have access to them

john.calcAge();

// each object has a special property called __proto__
// this property is pointing to the prototype of the constructor function
console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype);
// true because the prototype is the same for all the objects created by the constructor function

console.log(Person.prototype.isPrototypeOf(john));
// true because john is an instance of the Person constructor function

// more intuitive name
// .prototypeOfLinkedObjects

//------- setting properties on the prototype
Person.prototype.species = "Human";
// now this property won't be directly on the objects
// but they will still have access to it

console.log(john.species);
// Human

//--- check if the property is on the object or the prototype
console.log(john.hasOwnProperty("firstName"));
// true
console.log(john.hasOwnProperty("species"));
// false

console.log(john.__proto__);
// { calcAge: [Function: calcAge]}
console.log(john.__proto__.__proto__);
// the object prototype
console.log(john.__proto__.__proto__.__proto__);
// nll

console.dir(Person.prototype.constructor);
// the result will be the Person constructor function itself

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.__proto__);
// will be the array prototype which contains all the methods we use on arrays

// each array don't have all of these methods instead it can access them by the prototype chain

console.log(arr.__proto__ === Array.prototype);
// true

//--- adding new method to the Array constructor and all the array can access it

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// in practice don't do that

//------- in functions

// every function is an object which has a prototype
console.dir((x) => x + 1);
// the prototype of the function has all the methods we use on functions

//--------- prototype in the dom
const h1 = document.querySelector("h1");
console.dir(h1.__proto__);
