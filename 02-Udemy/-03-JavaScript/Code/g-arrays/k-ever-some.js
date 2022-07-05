const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.includes(-130));
// test for equality

//----  test for condition  [some]
// return true if there is at least one element match the condition
console.log(movements.some((mov) => mov === -130));

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);
// true

//----- every

// return true of all the elements in the array match the condition

console.log(movements.every((mov) => mov > 0));
// false

// separate call back
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
