//************************ normal way
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//************** array constructor
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));

//****************** Empty array + fill method
const x = new Array(7);
console.log(x);
// [1] will be an array with 7 empty elements
// [2] we cannot use this x array for anything
// [3] you cannot use methods in it EXCEPT the fill method

x.fill(1);
console.log(x);
// will fill the entire array with that value
// mutate the original array

// define a start and ending point
x.fill(1, 3, 5);

// use it on the normal arrays

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 3, 6);
console.log(arr);
// [1, 2, 3, 23, 23, 23, 7]

//*********************  array.from()

// we but an object and a callback function like in the map method
const y = Array.from({ length: 7 }, function (cur, i) {
  return 1;
});
console.log(y);
// [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, function (_, i) {
  return i + 1;
});
console.log(z);
// [1, 2, 3, 4, 5, 6, 7]

const random = Array.from({ length: 100 }, function (cur, i) {
  return Math.trunc(Math.random() * 6) + 1;
});
console.log(random);

//*************** convert iterables into arrays

// see the project 292
