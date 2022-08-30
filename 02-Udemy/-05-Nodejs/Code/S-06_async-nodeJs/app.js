const geocode = require("./utils/geocode");
const weather = require("./utils/forecast");

geocode(process.argv[2], (error, { latitude, longitude, placeName } = {}) => {
  if (error) {
    return console.log(error);
  }

  weather(latitude, longitude, (error, body) => {
    if (error) {
      return console.log(error);
    }
    console.log(`${placeName} :`);
    console.log(body);
  });
});
