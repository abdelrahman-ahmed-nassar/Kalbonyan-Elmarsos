/*
reduce boils("reduce")all array elements down to one single value 
(e.g. adding all elements together)
there is NO new array is created 
it just returns the result 
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// the first element is the accumulator which is the result of each iteration and which we keep adding to [like the snow ball]

// the accumulator is result coming from each iteration

//NOTICE the result of ay reduce method is the accumulator so we must return it

//-----[[ what you return will be the accumulator ]]
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // define the starting point for the accumulator

// simplify it
const balanceS = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

// doing it with the for loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// get the maximum value
const max = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

//************* use the accumulator as an object
// the project  347
