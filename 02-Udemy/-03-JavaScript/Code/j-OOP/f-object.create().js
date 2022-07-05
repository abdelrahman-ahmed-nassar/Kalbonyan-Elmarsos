// 1. we create a prototype object
// 2. we create a new object using the object.create() method
// 3. the new object will be linked to the prototype object
// 4. the new object will have access to all the properties of the prototype object
// 5. we add properties to the new object

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // adding properties programmatically
  // this is not a constructor function
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 1995;
steven.calcAge();
// will work because of the prototypal inheritance
console.log(steven.__proto__ === PersonProto);
// true

const sarah = Object.create(PersonProto);
// adding properties programmatically
sarah.init("Sarah", 1994);
sarah.calcAge();

// in this way we don't need constructor function or prototype property
