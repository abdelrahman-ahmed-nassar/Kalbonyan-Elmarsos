const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  // NOW we have duplicate code and the two classes are not connected and if we change one the other won't change

  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking the two classes
Student.prototype = Object.create(Person.prototype);
// NOTICE must be linked before adding properties or methods

const mike = new Student("Mike", 1984, "Computer Science");
Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and I study ${this.course}`);
};
mike.introduce();
// the result will be => my name is Mike and I study Computer Science

// fix the constructor problem
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
