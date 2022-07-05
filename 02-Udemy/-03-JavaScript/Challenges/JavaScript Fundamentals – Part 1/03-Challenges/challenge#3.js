
// challenge
const scoreDolphins = (96 + 180 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("koalas win the trophy");
} else {
  console.log("both win the trophy  (withdraw)");
}
// adding a minimum score

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
} else {
  console.log("No one wins the trophy");
}
