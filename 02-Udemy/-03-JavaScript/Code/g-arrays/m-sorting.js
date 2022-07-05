"use strict";
//*********** sorting arrays
const owners = ["jonas", "Zach", "Adam", "Martha"];

console.log(owners.sort());

//NOTICE
// [1] sort the elements alphabetically
// [2] will mutate the original array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements.sort());
// will sort the numbers alphabetically which is not what we won't

//---- fix that with compare callback function
// first argument  => current value
// sec argument => next value

//return < 0    a, b  === a, b  (keep order)
//return > 0    a, b  === b, a  (switch order)

// ascending order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

// descending order
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});

// will also work with strings

// simplify it if we work only with numbers

movements.sort((a, b) => {
  return a - b;
});

movements.sort((a, b) => {
  return b - a;
});
// receive an array

// bubble sort
let bubbleSort2 = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

// merge sort

/*
.                [5, 2, 4, 3, 1]

.                [5, 2, 4, 3, 1]
.            [5, 2, 4]  |   [3, 1]
.        [5, 2]    [4]  |   [3]   [1]
.      [5]   [2]   [4]  |   [3]   [1]

      [5]   [2]   [4]  |   [3]   [1]
          [2, 5]   [4]  |   [1, 3]
          [2, 4, 5]     |   [1, 3]
                [1, 2, 3, 4, 5]
*/
const merge = function (left, right) {
  let sortedArr = []; // the sorted elements will go here

  while (left.length && right.length) {
    // insert the smallest element to the sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  // use spread operator and create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
};

function mergeSort(arr) {
  const half = arr.length / 2;

  // the base case is array length <=1
  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.splice(0, half); // the first half of the array
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
}
