const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// but all the elements in new array  and remove nesting
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// the flat method only goes one level deep when flatting the array
console.log(arrDeep.flat());

// fix it with defining the levels
console.log(arrDeep.flat(2));

// the default is 1

// flat map do mapping and then flat automatically

// NOTICE the flatMap can go only one level deep
