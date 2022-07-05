/*
map method take an array 
loop over that array 
but without changing the original array 
It's create new array an put the results in it
*/

const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// like the forEach but create new array but not change the original one

// with functional programming
const movementsUsd = movements.map(function (mov, i) {
  return mov * eurToUsd;
});

// you can't use return unless there is a variable that wait to receive the outputs

console.log(movements);
console.log(movementsUsd);

// arrow function
const movementsUsdArrow = movements.map((mov) => mov * eurToUsd);
console.log(movementsUsdArrow);

// other way with procedural programming
const movementsUsdFor = [];
for (const mov of movements) {
  movementsUsdFor.push(mov * eurToUsd);
}
console.log(movementsUsdFor);

//***** Example

const movementsStr = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: you deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: you withdrew ${Math.abs(mov)}`;
  }
});

// optimize it
const movementsStrOptimized = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: you ${mov > 0 ? `withdrew` : `deposit`} ${Math.abs(
      mov
    )}`
);

console.log();
