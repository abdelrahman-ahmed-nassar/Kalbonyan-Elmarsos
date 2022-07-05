// How Passing Arguments Works: Values vs. Reference
const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};
checkIn(flight, jonas);
console.log(flight);
// won't be changed because we change the parameter and the parameter is like a copy of the original variable but not refer to it

// Is the same as doing...
const flightNum = flight;

console.log(jonas);
// will be changes because it's a reference type so the parameter copied the reference of the object to the heap but they both still refer to the same object in the heap

// Is the same as doing...
const passenger = jonas;

//***** now this function is manipulating the same object nad makes issus
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

// java script don't have passing by reference only passing by values
// BUT what about object we pass the reference NO the reference itself is still a value that contain memory address
