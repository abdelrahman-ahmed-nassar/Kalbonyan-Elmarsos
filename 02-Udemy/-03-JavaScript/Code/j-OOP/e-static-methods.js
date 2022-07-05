// static methods are methods that are called on the class itself, not on an prototype of the class.

Array.from(document.querySelectorAll("h1"));

// this method is attached to the array constructor
// we cannot use it on an array
[1, 2, 3].from();
// ERROR TypeError: from is not a function

// meaning its in the original array constructor
// and not in the array prototype

// SO its called a static method

// another static method
Number.parseFloat("1.2px");

//------- implement static methods

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.hey = function () {
  console.log("hey");
  console.log(this);
  // will be the entire constructor function
};

Person.hey();

// NOTICE not inherited
const jonas = new Person("Jonas", 1990);
jonas.hey();
// won't work

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  static hey() {
    console.log("hey");
  }
}
