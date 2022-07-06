
const calledAverage = (a, b, c) => (a + b + c) / 3;

scoreDolphins = calledAverage(44, 23, 71); 
scoreKoalas = calledAverage(65, 54, 49); 

const checkWinner = function (avgDolphin , avgKoalas) {
  if (avgDolphin >= 2 * avgKoalas ) {
    console.log(`Dolphins win (${avgDolphin} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphin) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphin})`);
  } else {
    console.log(`no one won`);
  }
}

checkWinner(scoreDolphins, scoreKoalas)

