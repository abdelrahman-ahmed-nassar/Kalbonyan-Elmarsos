const getCountryData = function (country) {
  //  1)      create a request to API using the old school of XMLHttpRequest
  const request = new XMLHttpRequest();

  // 2)     make the request attached to the API
  // we pass the request type [GET, POST, PUT, PATCH ]and the URL [end point]of the API [Rest countries]
  request.open("GET", `https://restcountries.com/v2/name/${country}`);

  //    3)    send the request
  request.send();

  //  4)   listen to the response of the request
  request.addEventListener("load", function () {
    // this keyword point to the request

    console.log(this.responseText);
    // will be in JSON format

    // convert the json into a JS object
    // this will array contain 1 object that have all the info about the country
    const [data] = JSON.parse(this.responseText);

    // build the card component

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} Million person</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
`;

    // insert the html
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData("egypt");
