//--------------  render neighbor country with fetch

const getCountryDataWithFetch = function (country) {
  const request = fetch(`https://restcountries.com/v2/name/${country}`);
  request
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];

      if (!neighbor) return;

      // make the second ajax call
      // the then method return always a promise
      // bur if we return a value this value will be the fulfillment value of the promise
      // the fulfill method is the argument of the then callback function
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
      // will return new promise
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"));
};

getCountryDataWithFetch("spain");
