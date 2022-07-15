//////////////////////////////////////////////
/*              callback                   */
//////////////////////////////////////////////
const doWorkCallBack = (callback) => {
  setTimeout(() => {
    // callback(undefined, "Success")
    callback("error", undefined)
  }, 2000);
}

doWorkCallBack((error, result ) => {
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
})

doWorkPromise.then(result => {
  console.log("success");
  console.log(result);
}).catch((error) => {
  console.log("Error");
  console.log(error)
})