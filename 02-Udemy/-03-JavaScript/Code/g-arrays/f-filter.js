/*
filter the element of the array according to a condition 
the elements that pass the test will be in a NEW filtered array 
meaning it doesn't affect the original array but create new one
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  // we but a boolean [condition]
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// other way
let depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
