
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
