const jonArray = [
  "jonas",
  "doe",
  2037 - 1991,
  "teacher",
  ["bob", "steven", "adam"],
];

const jonObject = {
  firstName: "jon",
  // property : value,
  lastName: "doe",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["steven", "steven", "adam"],
};

//******** get data from the object

//---- the dot notation

console.log(jonObject.age);

//------- the bracket Notation

console.log(jonObject["age"]);

//* in the brackets we can put any expression

const nameKey = "Name";
console.log(jonObject[`first${nameKey}`]);

// we can use that in a lot of situation

const interestedIn = prompt(
  "what do you want to know, job, firstName, friends"
);

if (jonObject[interestedIn]) {
  // meaning if it is defined and exist
  console.log(jonObject[interestedIn]);
} else {
  console.log("wrong request");
}

//*  adding to the object

jonObject.location = "egypt";
jonObject["twitter"] = "@jon";
console.log(jon);

// challenge

console.log(
  `${jonObject.firstName} has ${jonObject.friends.length} friends and hid best friend is called ${jonObject.friends[0]}`
);

//********* object methods

jonObject = {
  firstName: "jon",
  // property : value,
  lastName: "doe",
  birthYear: 1991,
  job: "teacher",
  friends: ["steven", "steven", "adam"],
  hasDriversLicense: true,

  // we use the function expression not the declaration function
  CalcAge: function (birthYear) {
    return 2037 - birthYear;
  },
  // remember the function is just a value
  // any function attached to an object is called method
};

console.log(jonObject.CalcAge(1991));
console.log(jonObject["CalcAge"](1991));

// dry

jonObject = {
  firstName: "jon",
  // property : value,
  lastName: "doe",
  birthYear: 1991,
  job: "teacher",
  friends: ["steven", "steven", "adam"],
  hasDriversLicense: true,

  CalcAge: function () {
    return 2037 - this.birthYear;
    // instead of writing jonObject.birthYear
    // meaning if we log(this) it will be the same as log(jonObject)
  },
};

// then we use it like that
console.log(jonObject.CalcAge());

// store the value of function in a new property

jonObject = {
  firstName: "jon",
  // property : value,
  lastName: "doe",
  birthYear: 1991,
  job: "teacher",
  friends: ["steven", "steven", "adam"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    console.log(
      `${this.firstName} is a ${this.calcAge()}-years old ${
        this.job
      } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
    );
  },
};

// then we use it like
jonObject.calcAge();

console.log(jonObject.age);
console.log(jonObject.age);
console.log(jonObject.age);
