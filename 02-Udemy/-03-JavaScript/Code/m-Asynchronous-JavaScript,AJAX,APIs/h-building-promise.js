// build out own promise

// the promise is special kind of objects
// take an executor as an argument
// as soon as the promise constructor runs, the executor function will be executed
// the executor function must produce a value that will the result value of the promise
// the executor function have two arguments resolve and reject
// calling the resolve function will resolve the promise [make it fulfilled]
// we put the result value of the promise inside the resolve function
// we put the error message that we want to handle with the catch method
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("You win");
  } else {
    reject("You lost your money");
  }
});

// consume the promise
lotteryPromise
  .then(function (result) {
    // the result will be the value we passed in the resolved function
    console.log(result);
  }) // the error will be the value we passed in the rejected function
  .catch((err) => console.log(err));

//---- make it asynchronous [because it don't take time to be accepted]
const lotteryPromise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You win");
    } else {
      reject(new Error("You lost your money"));
    }
  }, 2000);
});

lotteryPromise2
  .then(function (result) {
    // the result will be the value we passed in the resolved function
    console.log(result);
  }) // the error will be the value we passed in the rejected function
  .catch((err) => console.log(err));

// promisify stTimeOut
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("i waited 2 seconds");

    return wait(1);
  })
  .then(() => {
    console.log("i waited for 1 second more");
  });

//------- other way of creating resolve and reject promise
Promise.resolve("abc").then((res) => console.log(res));
Promise.reject("abc").catch((res) => console.log(res));
