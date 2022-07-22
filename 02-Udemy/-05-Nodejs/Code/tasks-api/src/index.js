const app = require("./app");

const port = process.env.PORT;

// start the server
app.listen(port, () => {
  console.log("Server is up on " + port);
});
