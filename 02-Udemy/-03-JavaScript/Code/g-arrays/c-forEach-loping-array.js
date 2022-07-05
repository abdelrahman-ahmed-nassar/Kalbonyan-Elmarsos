// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log("---- FOREACH ----");
// higher-order function that have a callback function
// the forEach function is which call the function not us
// when it call it ?
// it call it in every iteration
// the first argument the current element
// the second argument is the current index
// the third argument is the entire array itself
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// what happen
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

console.log(movements.entries());

//NOTICE
// arr.entires()    index   element
// forEch           element  index

//NOTICE
// the break and continue does NOT work in the for each looping

//NOTICE
// the forEach method does not produce any value it just makes manipulation on an array so you can't use chain on it but if you want to do that you should put it in the end of the chain

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach((num, i, arr) => {
  arr[i] = num + 2;
  console.log(num);
});

console.log(arr);
