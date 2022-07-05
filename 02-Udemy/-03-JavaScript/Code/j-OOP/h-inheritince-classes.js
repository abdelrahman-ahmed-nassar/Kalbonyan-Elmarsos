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

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log("Hey there");
  }
}

/*
in this way every thing still work the same behind the scenes but a lot of thing are done in automated way

*/

// to make the class inherit from another class
// we need 2 keywords - extends and super

class studentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // person.call(this, fullName, birthYear);
    // NOTICE Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.fullName} and I study ${this.course}`
    );
  }
  calcAge() {
    console.log(
      `I'm ${this.age} years old, But I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// if there is only the properties that is in the parent we don't have to use super
// and the child will inherit the parent's properties
const martha = new StudentCl("Martha Jonas", 1990, "Computer science");
martha.introduce();
martha.calcAge();
