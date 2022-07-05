// replace the XML way with the new way Fetch API

const request = fetch(`https://restcountries.com/v2/name/egypt`);
console.log(request);

// the result will be promise
// promise: An object that is used as a placeholder for the future result of an asynchronous operation.
// promise: A container for an asynchronous delivered value

//--------- consume the promise
const getCountryData = function (country) {
  // we pass qa callback function in the THEN method that we want to happen when the promise is fulfilled (successful)
  // the argument of the callback function is the response that we get if the promise is fulfilled
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      // the data is exist in the response body
      // in order to read this data we should use the response.json() method
      // this method it self will return a promise
      return response.json();
    })
    .then(function (data) {
      renderCountryData(data);
    });
};

// fetch ==> promise
// promise == then ==> response  (cannot read the body data)
// response == json ==> promise (the resolved value of it will be the real data)
// return promise
// promise ==> then ==> data (can read the body data)
