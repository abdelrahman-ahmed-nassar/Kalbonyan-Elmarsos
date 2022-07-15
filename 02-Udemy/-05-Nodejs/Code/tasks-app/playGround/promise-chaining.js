require("../src/db/mongoose");
const User  = require("../src/models/user");

// 62d0288cd1a823e27ae3e703

User.findByIdAndUpdate("62d0288cd1a823e27ae3e703", {age: 1}).then(user => {
  console.log(user);
  return User.countDocuments({age: 1})
}).then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})