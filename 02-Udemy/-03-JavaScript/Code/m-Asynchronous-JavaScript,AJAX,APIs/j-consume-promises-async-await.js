/*
a function that will basically keep running in the background while performing the code that inside of it, then when this function is done, it automatically returns a promise
*/

// syntactic sugar of the then promises way

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))
const whereAmI = async function () {
  // we try to catch the error
  try {
    // await ==> promise
    const pos = await getPosition();
    // will stop the code come after the fetch [will wait it]
    // but the function itself as a whole is Async so that is not a problem
    // the value will be the resolved value of the promise
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    if (!res.ok) throw new Error("Problem getting country");
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};
whereAmI();
