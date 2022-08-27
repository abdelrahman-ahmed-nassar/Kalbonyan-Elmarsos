//////////////////////////////////////////////
/*              callback                   */
//////////////////////////////////////////////
const doWorkCallBack = (callback) => {
  setTimeout(() => {
    // callback(undefined, "Success")
    callback("error", undefined);
  }, 2000);
};

doWorkCallBack((error, result) => {
  if (error) return console.log(error);

  console.log(result);
});

//////////////////////////////////////////////
/*                promise                   */
//////////////////////////////////////////////

const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("success");
    console.log(result);
  })
  .catch((error) => {
    console.log("Error");
    console.log(error);
  });

//////////////////////////////////////////////
/*          promise chaining                */
//////////////////////////////////////////////

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 200);
  });
};

add(1, 3)
  .then((sum) => {
    console.log(sum);
    return add(sum, 1);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((error) => {
    console.log(error);
  });
