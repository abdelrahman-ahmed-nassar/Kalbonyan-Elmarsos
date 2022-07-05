// when we want the requests happen one after another and not in parallel

// create sequence of requests

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country  ${className}">
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

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// AJAX call country 1
const getCountryAndNeighbor = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);

    // render country one
    renderCountry(data);

    // Get neighbor country 2
    const neighbor = data.borders?.[0];

    if (!neighbor) return;
    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener("load", function () {
      // we don't need to destructure because we getting the data with the code way
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, "neighbour");
    });
  });
};
getCountryAndNeighbor("spain");
