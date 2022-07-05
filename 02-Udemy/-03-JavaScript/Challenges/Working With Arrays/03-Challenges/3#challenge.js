///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    //this is not the normal way of calc the average but it still works just think in
    // 2 + 3 + 5 + 6 / 4     === 2 / 4  + 3 / 4 + 5 / 4 + 6 / 4
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge(ages1));
