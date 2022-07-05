//******  adding values to map without the set method

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

//*****  convert object to map

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(Object.entries(openingHours));
// give you array of arrays
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//*******  looping over the map

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("your answer"));
console.log(answer);

console.log(question.get(answer === question.get("correct")));

//****** convert map to array
console.log(...question);
console.log(...question.entries());
// the same
console.log(...question.keys());
console.log(...question.values());
// will be array of arrays
