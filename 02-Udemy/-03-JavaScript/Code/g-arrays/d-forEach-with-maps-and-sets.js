// forEach With Maps and Sets

//****** Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
// normal way

for (const [key, value] of currencies) {
  console.log(`${key}: ${value}`);
}

// for each way
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//****** Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  // NO keys or indexes
  // so the value of the first argument = the value of the second
  // the _ is throwaway variable which is unnecessary
  console.log(`${value}: ${value}`);
});
