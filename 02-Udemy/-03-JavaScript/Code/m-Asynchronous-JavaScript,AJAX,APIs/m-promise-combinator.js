// receive array of promises and return a promise that resolves to an array of the results

// promise.race

/*
is settled as soon as one of the input promises settles.

settled simply means that a value is available, but it doesn't matter if the promise got rejected or fulfilled.
*/

(async function () {
  // the faster one will be the one that is settled
  const data = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
  ]);
});

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Timeout after ${s} seconds`));
    }, s * 1000);
  });
};

Promise.race([getJSON(`https://rerestcountries.com/v2/name/mexico`).timeout(1)])
  .then((res) => console.log(res[0]))
  .catch((err) => console.log(err));

//  promise.allSettled

//---------  Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));
Promise.all([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//-------------- Promise.any
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
