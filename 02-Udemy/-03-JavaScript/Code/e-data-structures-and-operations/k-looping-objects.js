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
//***** 1) getting the properties names (looping over keys)

for (const day of Object.keys(openingHours)) {
  console.log(day);
  // the name of each property [key names] in the object
}

// what is Object.keys(openingHours);

const properties = Object.keys(openingHours);
console.log(properties);
// an array with all the properties names

//******  compute how many properties in the object
console.log(properties.length);

//******* 2) get the properties values
const values = Object.values(openingHours);
console.log(values);
// array with the keys' values which in this case objects

//********  getting the kay and the value
const entries = Object.entries(openingHours);
console.log(entries);
// will get an array of arrays with key pairs

//*********  3) looping over the object

for (const [key, { open, close }] of entries) {
  // array with the key and the value which is object itself
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
