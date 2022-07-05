// format numbers

const num = 333343.23;
console.log(new Intl.NumberFormat("en-US").format(num));
// 333,334,.23
console.log(new Intl.NumberFormat("ar-SY").format(num));
// ٣٣٣٬٣٤٣٫٢٣

// the browser language
console.log(new Intl.NumberFormat(navigator.language).format(num));

// optimize
const options = {
  style: "unit",
  unit: "mile-per-hour",
  // style: "percent",
  // style: "currency",
  // currency: 'EUR',
  useGrouping: false,
  // the separators
  // the currency is independence from the local
};
// search more in mdn

console.log(new Intl.NumberFormat(navigator.language, options).format(num));
