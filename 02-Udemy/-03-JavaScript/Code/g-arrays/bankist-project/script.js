'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
//*                   Data
////////////////////////////////////////////////
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 70.79, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-01-01T10:17:24.185Z',
    '2022-02-08T14:11:59.604Z',
    '2022-05-26T17:01:17.194Z',
    '2022-05-14T23:36:17.929Z',
    '2022-05-20T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-03-10T14:43:26.374Z',
    '2022-05-25T18:49:59.371Z',
    '2022-04-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];
/////////////////////////////////////////////////
//*                  Elements
/////////////////////////////////////////////////

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
//*                   functions
/////////////////////////////////////////////////

//*---------------------- format date

// todo: receive date object and format it
const formatMovementDate = function (date, locale) {
  // todo: calc the number of days between now and the date received with millisecond
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (24 * 60 * 60 * 1000));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
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

//*----------------------- format currency

// todo: receive number and format it as a currency
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

//*----------------------------  display movements

// todo: receive an array from the current account objects and display its content in HTML
const displayMovements = function (acc, sort = false) {
  // reset the HTML
  containerMovements.innerHTML = '';

  // sorted or not
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  // loop over the movements array to create every thing
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // define the date
    const date = new Date(acc.movementsDates[i]);

    // format the date
    const displayDate = formatMovementDate(date, acc.locale);

    // format currency
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    // create the html code
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>
    `;

    // adding the html element
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//*----------------------------  calc the total balance

// todo: receive the current account and get the movements from it
const calcDisplayBalance = function (acc) {
  // add the total balance to the object
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // display the total balance to the UI
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

//*----------------------------  display summary

// todo: receive the current account and get the movements from it
const calcDisplaySummery = function (acc) {
  // calc the positive values
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  // calc the negative values
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  // calc the interests according to ech object interest value
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    // we want to add just interests that is more than 1
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};
// display it for the current account

//*----------------------------  COMPUTE THE USERNAMES

// todo: receive the accounts array that contain all the account object
const createUserName = function (accounts) {
  // get each object separated
  accounts.forEach(function (account) {
    // make a property on each object with the username
    account.username = account.owner
      .toLowerCase()
      .split(' ') // put every word in an array as an array element
      .map(name => name[0]) // loop over that array and take first letter
      .join(''); // convert the array into string
  });
};
createUserName(accounts);

//*-------------------------- update UI

// todo: receive the current account
const updateUI = function (acc) {
  // display movements
  displayMovements(acc);

  // display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummery(acc);
};

//*----------------------------- logout timer
let timer;
// todo:
const startLogOutTimer = function () {
  let time = 60 * 5;

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    // in each call, print the remaining time to the UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds , stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      // update the log message
      labelWelcome.textContent = `Log in to get started`;

      // hide the UI
      containerApp.style.opacity = 0;
    }

    // decrease one second
    time--;
  };

  // what we did is we separate the tick out to have the ability to call it before iteration so it won't be late with 1 second but it will start immediately after execution

  tick();
  // call the timer every second
  const innerTimer = setInterval(tick, 1000);
  return innerTimer;
};
//? this function will return the timer
//? to make that start you should assign it to value

/////////////////////////////////////////////////
//*          event listener
/////////////////////////////////////////////////

//*----------------------------  login  [current account]

let currentAccount;
// todo: receive an account username and PIN
btnLogin.addEventListener('click', function (e) {
  // prevent reloading when click on the btn
  e.preventDefault();

  // define the current account  [object]
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // check the credentials [password]
  if (currentAccount?.pin === +inputLoginPin.value) {
    // [1] display the message
    labelWelcome.textContent = `welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    // [2] display the ui
    containerApp.style.opacity = 100;

    // update UI
    updateUI(currentAccount);

    // [3] make the 2 input empty
    inputLoginUsername.value = inputLoginPin.value = '';

    // [4] makes it lose the focus
    inputLoginPin.blur();

    // [5] display the current date
    const now = new Date();
    const options = {
      year: 'numeric',
      month: 'numeric',
      // weekday: 'long',
      day: 'numeric',
      // month: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
    };
    const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Update the timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
  }
});

//*----------------------------  transfer money

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // reset the inputs
  inputTransferAmount.value = inputTransferTo.value = '';

  // check the credentials
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // transfer money
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // add date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // update Ui
    updateUI(currentAccount);

    // reset the logger timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

//*----------------------------  add loan

// our bank has a rule, which says that it only grants a loan if there at least one deposit with at least 10% of the requested loan amount. mean the loan must be lees than or equal the biggest deposit * 10

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    setTimeout(function () {
      // add movements
      currentAccount.movements.push(amount);

      // add date
      currentAccount.movementsDates.push(new Date().toISOString());

      // update UI
      updateUI(currentAccount);

      // reset the logger timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});
//*----------------------------  delete account

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
      // return the index of the first element that match the condition
    );
    // .indexOf()

    // delete account
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

//*----------------------------  count all the money in the bank

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

//*----------------------------  sorting by values
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/*
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// array.from()

// the result of querySelectorAll is node-list
// we convert into array
// we used the callback function
labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(
    document.querySelectorAll('.movements_value'),
    function (el) {
      return +el.textContent.replace('€', '');
    }
  );
  console.log(movementUI);

  // other way for converting node-list into an array
  const movementUI2 = [...querySelectorAll('.movements_value')];
  // but now we will do mapping manually
});

/////////////////////////////////////////////////

//*   array practice

// 1. calc all the deposits in the bank
const bankDepositSum = accounts
  .flatMap(function (acc, i, obj) {
    return acc.movements;
  })
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositSum);

// 2. calc how many deposits more 1000

const numDeposits1000 = accounts
  .flatMap(function (acc, i, obj) {
    return acc.movements;
  })
  .filter(mov => mov > 1000).length;

console.log(numDeposits1000);

// other way

const numDeposits1000V2 = accounts
  .flatMap(function (acc, i, obj) {
    return acc.movements;
  })
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);

console.log(numDeposits1000);

// 3. create new object contain the sum of the deposits and the withdrawals

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// 4. convert any string to titleCase

// this is a nice title => This Is a Nice Title

const convertTitleFace = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase;
};

console.log(convertTitleFace('this is a nice title but'));

///////////////////////////////////////////////

//*           remainder operator
// colorize the movements row be even or odd
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if ((i + 1) % 2 === 0) row.style.backgroundColor = 'red';
    if ((i + 1) % 2 === 1) row.style.backgroundColor = 'blue';
  });
});

/*
[...document.querySelectorAll('.movements_row')].forEach(function (mov, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'red';
    }
    if (i % 3 === 0) row.style;
  });
*/
