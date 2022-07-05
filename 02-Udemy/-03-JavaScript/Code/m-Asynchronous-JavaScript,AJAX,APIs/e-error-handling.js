//  1)  pass a second callback function to the then method

// 2)  handling all the errors with the catch method [put at the end of the chain]

// we pass the error as argument

//--- handle error
const getCountryAndNeighborWithFetch = function (country) {
  const request = fetch(`https://restcountries.com/v2/name/${country}`);
  request
    .then(
      (response) => response.json()
      // error callback function
      // ,(err) => alert(err)
    )
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];

      if (!neighbor) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      renderError(`Error: Some thing went wrong  ${err.message}. Try again`);
    })
    // using the finally method [receive a callback that  will happen whether the promise is fulfilled or rejected]
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

getCountryAndNeighborWithFetch("spain");
