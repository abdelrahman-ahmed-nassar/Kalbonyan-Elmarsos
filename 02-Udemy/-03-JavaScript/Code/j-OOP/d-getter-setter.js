// a properties on objects [assessor properties]

// So getters and setters are basically functions that get and set a value

const account = {
  owner: "jonas",
  movements: [200, 530, 120, 300, -100],

  // implement a getter PROPERTY
  // [allow you to manipulate the data before receiving it]
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Implement a setter method
  // [allow you to create new property] or [update existing property]
  // need one parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

// using the getter
console.log(account.latest);

// using the setter
account.latest = 500;
console.log(account.movements);

//---------- using setters and getter with classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  great() {
    console.log(`Hello ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  // set a property that does exist [for data validation]
  set fullName(name) {
    if (name.includes(" ")) {
      // using different name to avoid conflict
      this._fullName = name;
    } else alert("Please enter your full name");
  }

  // create a getter fot the fullName
  get fullName() {
    return this._fullName;
  }
}

const walter = new PersonCl("Walter White", 1980);
