const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=8210c21d59f259e04a366fa12860726a&query=${longitude},${latitude}&units=f`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const temperature = body.current.temperature;
      const outFeelingTemperature = body.current.feelslike;
      const weatherDescription = body.current.weather_descriptions[0];
      callback(undefined,`${weatherDescription}. It's is currently ${temperature} degrees out. It feels like ${outFeelingTemperature} degrees out.` )
    }
  });
};


module.exports = forecast;
