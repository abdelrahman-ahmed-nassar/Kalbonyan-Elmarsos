// any number => 64 bit   but only 53 of them are used
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

//--------- big int
console.log(987971293839398289348974923893984n);
// the n transform it into bigint
console.log(BigInt(237894982));

// operations work just the same
console.log(10000n + 100000n);

// NOTICE

// you cannot mix regular numbers with BigInt in operations

// you cannot use the MATH methods on bigint

const huge = 284729472394827492847n;
const num = 23;
console.log(huge + BigInt(num));

// but you can use them in the comparison operator and the plus operator when working with string

//---------- Exception
console.log(20n > 15);
// true
console.log(20n === 20);
// false
console.log(20n == 20);

console.log(huge + " is REALLY big!");

//----- division
console.log(10n / 3n);
// 3n
