// when we input wrong country the promise actually fulfilled

//--------------  render neighbor country with fetch
const getCountryAndNeighborWithFetch = function (country) {
  const request = fetch(`https://restcountries.com/v2/name/${country}`);
  request
    .then((response) => {
      // the response has a property called ok that is a boolean

      if (!response.ok) {
        // when we throw an error it will pass all the thens methods and be the argument of the catch method
        throw new Error(`country not found ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];

      if (!neighbor) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then((response) => {
      // the response has a property called ok that is a boolean

      if (!response.ok) {
        // when we throw an error it will pass all the thens methods and be the argument of the catch method
        throw new Error(`country not found ${response.status}`);
      }

      return response.json();
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      renderError(`Error: Some thing went wrong  ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

getCountryAndNeighborWithFetch("spain");

//------------ use helper function

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error("No neighbour found!");
      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener("click", function () {
  getCountryData("portugal");
});
getCountryData("australia");
