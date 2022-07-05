"use strict";

///////////////////////////////

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//////////////////////////////

//--------------- render the country

const renderCountry = function (data, className = "", where = "beforeend") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} Million person</p>
      <p class="country__row"><span>🔡</span>${data.languages[0].name}</p>
      <p class="country__row"><span>#️⃣</span>${data.alpha3Code}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      <p class="country__row"><span>🌆</span>${data.capital}</p>
      <p class="country__row"><span>🕗</span>${data.timezones[0]}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML(where, html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

//////////////////////////////////////
// get country name
const userCountry = prompt(
  "tell me the name of the country you need information about"
);

// replace the fetch and the first then and converting to json

const getJSON = function (url, kind = "country") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${kind} not found ${response.status}`);

    return response.json();
  });
};

let country;
const getCountryData = function (country) {
  //------------------------------------------ ROOT
  getJSON(`https://restcountries.com/v2/name/${country}`)
    .then((data) => {
      // root country
      console.log(data[0]);
      renderCountry(data[0]);
      country = data[0];
      const firstNeighbor = country.borders?.[0];

      if (!firstNeighbor) throw new Error("this country has no neighbors");
      //---------------------------------------- NEIGHBOR 1
      return getJSON(`https://restcountries.com/v2/alpha/${firstNeighbor}`);
    })
    .then((data) => {
      renderCountry(data, "neighbour");

      const secondNeighbor = country.borders?.[1];
      if (!secondNeighbor)
        throw new Error("this country has no second neighbors");
      //-------------------------------------------------- NEIGHBOR 2
      return fetch(`https://restcountries.com/v2/alpha/${secondNeighbor}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`neighbor country not found ${response.status}`);

      return response.json();
    })
    .then((data) => {
      renderCountry(data, "neighbour", "afterbegin");
    })
    ////////////////////////////////////
    .catch((err) => {
      console.log(err);
      renderError(`Some thing went wrong ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

getCountryData(userCountry);
// australia
