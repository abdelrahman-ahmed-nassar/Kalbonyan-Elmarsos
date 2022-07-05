//------- create date

//* all the four ways create just a special kind of object

// 1)
const now = new Date();

console.log(now);
// Fri May 20 2022 17:17:56 GMT+0200 (Eastern European Standard Time) {}

//  2)
console.log(new Date("Fri May 20 2022 17:17:56"));
// java script parsing will complete it for us
console.log(new Date("December 24"));
// java script is smart

// NOTICE don't use this way because it's unreliable

// 3)
//            year, month, day, hour, minute, second
console.log(new Date(2037, 10, 19, 15, 23, 50));
// NOTICE
// the month in js is zero based so JEN is 0 and DEC is 11

// NOTICE this case
console.log(new Date(2037, 10, 33));
// thu Dec 03 2037
// js will know that there is no 33 day and will add the 3 days to a new month

// 4)
console.log(new Date());
/*
Finally, we can also pass into the date constructor function, the amount of milliseconds passed since the beginning of the Unix time, which is January 1, 1970,
*/
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// Sun Jan 04 1970 02:00:00 GMT+0200

//** dates are just special kind of objects that has its own methods

//------ working with dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

//--------- get numbers from the date object
console.log(future.getFullYear());
// 2037
console.log(future.getMonth());
// 10
console.log(future.getDate());
// 19
console.log(future.getDay());
// 4
//* the day of the week not of the month
console.log(future.getHours());
// 15
console.log(future.getMinutes());
// 23
console.log(future.getSeconds());
// 0

//---- get nicely formatted string
console.log(future.toISOString());
// 2037-11-19T13:23:00.000Z

//---------- to convert that string to date
console.log(new Date("2037-11-19T13:23:00.000Z"));

//---- get the time stamp of the date
// the milliseconds after January 1, 1970,
console.log(future.getTime());
// 2_142_249_780_000

console.log(new Date(2142249780000));
// will be the exact same date

//---- get the current stamp
console.log(Date.now());
const now2 = new Date(Date.now());

//--------- the set version (work for all the methods) [change the date]
future.setFullYear(2040);
console.log(future);

future.setMonth(10);
