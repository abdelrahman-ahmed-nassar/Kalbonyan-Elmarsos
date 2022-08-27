const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();

/************ the Arrow function [kind of expression] **********/

const calcAge3 = (birthYear) => 2037 - birthYear;

calcAge3(1991);
console.log(
  "🚀 ~ file: b-functions.js ~ line 60 ~ calcAge3(1991)",
  calcAge3(1991)
);

// accept one parameter and omit the return keyword
// but you can use {} after it and add more lines of code
// don't have its own keyword but it refers to  the parent
