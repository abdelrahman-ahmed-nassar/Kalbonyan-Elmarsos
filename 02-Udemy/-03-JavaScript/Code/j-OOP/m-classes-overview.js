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

class Student extends PersonCl {
  // public field [just the same as property defined in the constructor]
  university = "";
  // private field [not accessible from the outside]
  #studyHours = 0;
  // creating private field depend on the constructor arguments
  #course;
  // static public field [available only on the class itself]
  static numSubjects = 10;

  //constructor method [will be called automatically when we create an instance of the class with the new keyword]
  // Mandatory on A parent class but can be omitted on a child class
  constructor(fullName, birthYear, startYear, course) {
    // the same as this
    // person.call(this, fullName, birthYear);
    super(fullName, birthYear);

    // instance property like the public field but based on data come from the user
    this.startYear = startYear;
    // redefine private field
    this.#course = course;
  }

  // public method
  introduce() {
    console.log(
      `Hello, my name is ${this.fullName} and I study ${this.#course} at ${
        this.university
      }`
    );
  }

  // referencing private fields and methods
  study(h) {
    this.#makeCoffee();
    this.#studyHours += h;
  }

  // private methods [not supported]  [you can fake it with _ convention]
  #makeCoffee() {
    return `Here is your coffee`;
  }

  // setter
  set testScore(score) {
    this._testScore = score < 20 ? score : 0;
  }

  // a getter [getting property from outside with property not a method but we can still manipulate the data like we are in a method]
  get testScore() {
    return this._testScore;
  }

  // static method [available only on the class itself]
  static printCurriculum() {
    console.log(`The curriculum is ${this.numSubjects} subjects`);
  }
}

const student = new Student("John Doe", 1990, 2019, "Computer Science");

// REMEMBER:
/*
- classes are just a "syntactic sugar" for the constructor function
- classes are not hoisted 
- classes are first-class citizen 
- class body is always executed in strict mode  
*/
