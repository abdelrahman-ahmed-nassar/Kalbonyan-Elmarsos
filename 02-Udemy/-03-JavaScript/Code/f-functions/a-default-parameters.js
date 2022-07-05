"use strict";

const bookings = [];
const createBooking = function (
  flightNum = 1,
  numPassenger = 1 * 2,
  price = 199 * numPassenger
) {
  // old way
  // numPassenger = numPassenger || 1;
  // better old way
  // numPassenger ||= 1;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

//NOTICE the default values will only work if you don't pass an argument but if you do the argument will override the default value

//NOTICE after the  =  sign  you can but any expression

//NOTICE you can use the other parameter to calculate another parameter NOTICE BUT the param that will be used in the expression must come first in the list

//****** if you want to use the default values

createBooking("LH123", undefined, 1000);
