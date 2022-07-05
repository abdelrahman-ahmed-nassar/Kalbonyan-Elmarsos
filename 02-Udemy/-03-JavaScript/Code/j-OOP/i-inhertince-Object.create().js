const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

// create prototype that will be the prototype of the student

const StudentProto = Object.create(PersonProto);
// that is how we implement inheritance

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `Hi, my name is ${this.firstName} and I am studying ${this.course}`
  );
};

const jay = Object.create(StudentProto);

// jay.__proto__ === StudentProto
// studentProto.__proto__ === PersonProto

//NOTICE in object.create there is no constructors

jay.init("Jay", 1995, "CS");
jay.introduce();
jay.calcAge();
