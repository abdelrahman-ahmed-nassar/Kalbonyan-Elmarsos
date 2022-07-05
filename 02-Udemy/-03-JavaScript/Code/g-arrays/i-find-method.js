// we can use the Find method to retrieve one element of an array based on a condition.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// need a callback method
// WILL NOT return a new array but the first element that satisfies

const firstWithDrawals = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithDrawals);

// difference between filter and find
// filter return all the elements that match the condition in a new array
// find return the first element that match the condition but not an array

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

// we but some condition in the callback function the produce a boolean
// if the boolean is true it will return the element

const accounts = [account1, account2, account3, account4];

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

// it also have access to the index and the whole array like the other methods
