const mongoose = require("mongoose");
const validator = require("validator");
const express = require("express");
require("./db/mongoose");

const User = require("./models/user.js");
const Task = require("./models/task.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// create user
app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => res.status(201).send(user))
    .catch((error) => res.status(400).send(error));
});

// read all users
app.get("/users", (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((error) => res.status(500).send());
});

// read one user
app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then((user) => {
      if (!user) return res.status(404).send("no user found");

      res.send(user);
    })
    .catch((error) => {
      res.status(500).send("internet error");
    });
});

// create task
app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => res.status(201).send(task))
    .catch((error) => res.status(400).send(error));
});

// read all task
app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => res.status(200).send(tasks))
    .catch((error) => res.status(500).send());
});

// read one task
app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;

  Task.findById(_id).then((task) => {
    if (!task) {
      return res.status(404).send()
    }
    
    res.status(200).send(task)
  }).catch(error => res.status(500).send())
})

app.listen(port, () => {
  console.log("Server is up on " + port);
});


const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {age});
  const count = await User.countDocuments({age});
  return count;
}

try {
  updateAgeAndCount("as", 3)
} catch {

}