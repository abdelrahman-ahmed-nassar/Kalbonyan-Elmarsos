
const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (dogAge) {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  const adults = humanAges.filter((age) => age >= 18);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // 2 , 3  => (2 + 3) / 2 === (2/2 + 3/2) === 2.5;

  const average = adults.reduce(
    (acc, age, i, ar) => acc + age / Array.length,
    0
  );

  return average;
};

console.log(calcAverageHumanAge(ages1));
