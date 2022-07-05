"use strict";
const airline = "TAP Air Portugal";

const plane = "A320";

//NOTICE [1] the space is counted as letter
// [2] the index is ZERO based meaning it start from 0
// [3] searching is case sensitive
// [4] if the item is not exist it will give you (-1)

//**** getting a letter with the index
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);
console.log(plane[100]); // give undefined

//****** getting a letter with the charAt() method
console.log(plane.charAt(1)); // count the spaces
console.log(plane.charAt(100)); // give ""

//*****  getting the number of chars in the string
console.log(airline.length);
console.log("B737".length);

//**** getting the index of letter [first occurrence ]
console.log(airline.indexOf("r"));

//**** getting the index of letter [last occurrence ]
console.log(airline.lastIndexOf("r"));

//**** search for
console.log(airline.indexOf("portugal"));
// the result will be the index of the first letter in the word

//**** Extract part from the string
console.log(airline.slice(4));
// will slice from the index 4 to the end

//NOTICE ending point not including the end so the end index won't be in the result
console.log(airline.slice(4, 7));
// mean the index 4 , 5 , 6
// the length of the string will be [the end point - the starter point]

//*********** getting the first word of the string
console.log(airline.slice(0, airline.indexOf(" ")));

//************ getting the last word of the string
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

//***********  counting from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//********** Example
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

//******** Behind the scenes
console.log(new String("jonas"));
console.log(typeof new String("jonas"));
console.log(typeof new String("jonas").slice(1));

//*******************************/
//*         Part 2              */
//*******************************/

//NOTICE The string methods make new string but don't change the original one

//******  convert to upper or lower case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//******  Fix capitalization in name
const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//***** Bonus a function do the job
const fixPassengerName = function (passengerName) {
  const passengerNameLower = passengerName.toLowerCase();
  passengerName =
    passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
  return passengerName;
};
console.log(fixPassengerName("joNaS"));

const capitalize = function (passengerName) {
  return passengerName[0].toUpperCase() + passengerName.slice(1).toLowerCase();
};
console.log(capitalize("joNAs"));

//********* Comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";
// const lowerEmail = loginEmail.toLowerCase();

//*********  remove all the white spaces from a string
// const trimmedEmail = lowerEmail.trim();

//************* Multiple methods at the same time [chaining]
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//**** bonus
const checkingEmails = function (email, loginEmail) {
  email = email.toLowerCase().trim();
  const normalizedEmail = loginEmail.toLowerCase().trim();
  if (normalizedEmail === email) {
    console.log(`true email`);
    return "true email";
  } else {
    console.log(`false email`);
    return "false email";
  }
};
console.log(checkingEmails("hello@jonas.io", "  Hello@Jonas.Io \n"));

//********* replacing parts of string
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll('door', 'gate'));
//NOTICE that will replace just the first occurrence of the word

//****** solve with Regular expression  [global flag /word/g]
console.log(announcement.replace(/door/g, "gate"));

//*********** 2022 solution
console.log(announcement.replaceAll("door", "gate"));

//************  check if the sting have words  [[return Boolean]
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));

//********** check if the string start with
console.log(plane.startsWith("Airb"));

//************ check if it end with
if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Arirbus family");
}

//****** */ Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

//*******************************/
//*         Part 3              */
//*******************************/

//************** Split  [converting the string into array]
//- split(separator [opt], limit [opt])

console.log("a+very+nice+string".split("+"));
//[ 'a', 'very', 'nice', 'string' ]
console.log("Jonas Schmedtmann".split(" "));
// [ 'Jonas', 'Schmedtmann' ]
const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

//************** joining [converting array into string separated by separator ]
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

//****** capitalize a name  [transform the first letter into capital]
const capitalizeName = function (name) {
  // 1. separate each word and but it in a array
  const names = name.split(" ");
  // create the final array which will have the capitalized names and then we will join them
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //--- other way
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// Padding
/*
Now padding a string means to add a number of characters to the string until the string has a certain desired length.
*/
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
// NOTICE the number we pass is the new length of the string will be
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

//****  function that hide passwords
const maskCreditCard = function (number) {
  // convert the number into string without the String() method but with the type coercion
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));

//********* Repeat a string
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
