// NOT real class just syntactic sugar

// class is just function with constructor

// class expression
// const personCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods written outside of the constructor is on the prototype
  // this is just a nice way of doing the same thing
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // NOTICE there is no comma between the methods
  great() {
    console.log(`Hello ${this.fullName}`);
  }
}

const jonas = new PersonCl("Jonas", 1990);

// you can still add methods manually to the prototype
PersonCl.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Notice
// 1. classes are not hoisted
// 2. classes are first-classes citizen just like they are regular functions
// 3. classes are executed in strict mode
