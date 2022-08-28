const express = require("express");
const path = require("path");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
// rename the views folder
const viewsPath = path.join(__dirname, "../templates/views");
// set up the partials
const partialPath = path.join(__dirname, "../templates/partials");

// setup handlebars engine and views location
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "home page",
    name: "Abdelrahman Ahmed",
    address: req.query.address,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about page",
    name: "Abdelrahman Ahmed",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help page",
    name: "Abdelrahman Ahmed",
  });
});

app.get("/weather", (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.send({
      error: "Must provide an address query",
    });
  }

  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({
        error,
      });
    }
    // forecast
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send(error);
      }

      res.send({
        location,
        forecast: forecastData,
        address,
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 help",
    name: "Abdelrahman Ahmed",
    error: "help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Abdelrahman Ahmed",
    error: "Page Not found",
  });
});

app.listen(port, () => {
  console.log("server is up on port" + port);
});
