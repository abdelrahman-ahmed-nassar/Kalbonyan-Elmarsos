// syntactic sugar "_"

console.log(1000000);
console.log(1_000_000); // the engines will ignore the underScore
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);

// NOTICE
// we can only place the _  between two numbers

// 287,450,000,000
const diameter = 287_450_000_000;

const price = 345_99;

const transferFee1 = 15_00;
const transferFee2 = 1_500;
// NOTICE these are the same number

// NOTICE  won't work with NUMBER or parseInt method

console.log(Number("230_000"));
// won't work  NAN

console.log(parseInt("230_001"));
// 230
