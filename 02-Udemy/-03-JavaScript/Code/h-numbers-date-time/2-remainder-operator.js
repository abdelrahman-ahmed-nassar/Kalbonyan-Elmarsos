// return the remainder
console.log(5 % 2);

console.log(5 / 2);
// 2.5
// take the integer
// 5 = 2 * 2 + 1

console.log(8 % 3);

console.log(8 / 3);
// 2.6
// 8 = 2 * 3 + 2

//------------ use cases  [check if a number is even or odd]

// ? when the number is even
// when its reminder of divided by 2 is zero

console.log(6 % 2);
// 0

console.log(6 / 2);
//3
// 3 * 3 + 0

console.log(7 % 2);
// 1

console.log(7 / 2);
// 3.5
// take the int
// 7 = 3 * 2 + 1

const evenOrOdd = function (num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else if (num % 2 === 1) {
    console.log(`${num} is odd`);
  }
};

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 === 1;
