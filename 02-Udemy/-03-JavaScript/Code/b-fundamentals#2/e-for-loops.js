for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights  repetition ${rep}`);
}

/*for (initial value; condition; what will happen to the initial value after the iteration finished)*/

/* loop over arrays */

const jonas = [
  "jonas",
  "deo",
  2037 - 1991,
  "teacher",
  ["michel", "omar", "ali", "osama"],
];

let types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  // create array of the kind of every element in the array
  // first create an empty one

  types[i] = typeof jonas[i];

  // other way
  types.push(typeof jonas[i]);
}

const years = [2020, 1991, 2007, 1969];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2037 - years[i]; 

  // or 
  ages.push(2037 - years[i]);
}

//**  the for loop keywords 

// continue  => mean skip the current iteration and go to the next one 



for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  // we just need the strings 
  
  console.log(jonas[i], typeof jonas[i]);  
}

// break   =>  mean go out of the loop entirely 



for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  // we need to finish looping once we find a number 
  
  console.log(jonas[i], typeof jonas[i]);  
}


// looping backward through an array 


jonas = [
  "jonas",
  "deo",
  2037 - 1991,
  "teacher",
  ["michel", "omar", "ali", "osama"],
];

for (let i = jonas.length - 1; i >= 0 ; i--) {
  console.log(i, jonas[i]);
}

// nested loops 

for (let exercise = 1; i < 4 ; exercise++ ) {
  console.log(`----------- starting exercise ${exercise} `);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise: ${exercise} lifting weight repetition ${rep}`);
  }
}