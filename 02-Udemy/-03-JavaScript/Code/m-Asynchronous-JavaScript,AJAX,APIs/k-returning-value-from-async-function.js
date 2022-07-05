const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    if (!res.ok) throw new Error("Problem getting country");
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);

    // return data
    return `you are in ${dataGeo.city}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // rethrow the error
    throw err;
  }
};
//NOTICE async function always return a promise

const city = whereAmI();
// we will get promise not the value we want
// the value we returned explicitly will be the fulfilled value of the promise
console.log(city);

// solve that

// whereAmI()
//   .then((city) => console.log(city))
//   .catch((err) => console.error(err))
//   .finally(console.log());

(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (err) {
    console.error(err);
  }
  console.log(`3: finished getting location`);
});
