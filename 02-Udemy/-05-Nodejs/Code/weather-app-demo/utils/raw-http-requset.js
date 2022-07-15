const http = require("http")

const url = `http://api.weatherstack.com/current?access_key=8210c21d59f259e04a366fa12860726a&query=45,-75&units=f`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  })

  response.on("end", () => {
    console.log(JSON.parse(data));
  })
})


request.on("error", (error) => {
  console.log("An error", error);
})

request.end();