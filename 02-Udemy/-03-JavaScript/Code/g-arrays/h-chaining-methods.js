"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  // .map((mov) => mov * eurToUsd)
  .map((mov, i, arr) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
// NOTICE
// So we can only chain a method after another one, if the first one returns an array.

// NOTICE
//it is a bad practice in JavaScript to chain methods that mutate the underlying original array.And an example of that is the splice method.So again, you should not chain a method like the splice or the reverse method. I mean, you can do that,and for a small application like this one,
