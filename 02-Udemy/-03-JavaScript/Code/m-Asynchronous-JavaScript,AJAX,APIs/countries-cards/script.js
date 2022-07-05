"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

const getCountryAndNeighborWithFetch = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
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
      renderError(`${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

getCountryAndNeighborWithFetch("spain");
// australia
