// link to the db
require("./db/mongoose");
// set up the server
const express = require("express");
const app = express();
// listen to incoming json
app.use(express.json());

// environment

// load the routes
const TaskRouter = require("./routers/task");
const UserRouter = require("./routers/user");

// use the routes
app.use(TaskRouter);
app.use(UserRouter);

module.exports = app;
