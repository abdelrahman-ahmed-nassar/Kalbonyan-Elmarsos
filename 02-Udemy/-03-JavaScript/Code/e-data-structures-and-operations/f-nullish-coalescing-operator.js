// work just like the OR operator
// take the first truthy value
// NOTICE but it avoid Nullish values not falsy values
// nullish values: null , undefined
// so the 0 and '' will treated as truthy values

console.log(0 ?? "jonas");
// 0
