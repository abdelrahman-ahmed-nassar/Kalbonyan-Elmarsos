// subtract one date from
// when we convert date to a number it will give us the timeStamp
const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(future));
console.log(+future);
console.log(future.getTime());
// all will give the same result

// function subtract two dates
// calc the time stamp then convert it into day
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (24 * 60 * 60 * 1000);
calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

//*---------------------- format date

// todo: receive date object and format it
const formatMovementDate = function (date, locale) {
  // todo: calc the number of days between now and the date received with millisecond
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (24 * 60 * 60 * 1000));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // format the date normally
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;

    // format with API
    return new Intl.DateTimeFormat(locale).format(date);
  }
};
