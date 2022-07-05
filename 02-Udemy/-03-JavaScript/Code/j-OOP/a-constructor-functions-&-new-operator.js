"use strict";

//------- with new operator [it's a convention to start with a capital letter]
// can't be arrow function
const Person = function (firstName, birthYear) {
  // now the this keyword is bound to the object
  // we can create properties in object using this keyword

  // this properties is called the instances properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // adding methods to the object
  // NOTICE never create a method inside a constructor function
  // BAD FOR PERFORMANCE

  // we use the prototype to do that
  this.calcAge = function () {
    this.age = new Date().getFullYear() - this.birthYear;
  };
};
const john = new Person("John", 1990);
console.log(john);
// what happen when we use the new keyword

// 1. New operator creates a new empty object => {}
// 2. function is called ,   this keyword will point to the empty object
// 3. the {} will linked to prototype that we created
// 4. function automatically return the object {}

// now we can create as many objects as we want using the constructor function
const matilda = new Person("Matilda", 2000);
const jack = new Person("Jack", 1990);
console.log(matilda, jack);

// now these is an instances from the person

//--------- check if the object is an instance of the constructor function

const jay = "Jay";
console.log(matilda instanceof Person);
// true
console.log(jay instanceof Person);
// false
