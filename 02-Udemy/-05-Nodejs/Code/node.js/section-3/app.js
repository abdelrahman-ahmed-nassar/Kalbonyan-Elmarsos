const fs = require("fs");
const add = require("./helpers.js");
const sub = require("./notes.js");

console.log(add(1, 55));

console.log(sub(5, 3));

// fs.writeFileSync("notes.text", "My name is ahmed!");
fs.appendFileSync("notes.text", "\nNew text");
fs.appendFileSync("notes.text", "\nNew text");
fs.appendFileSync("notes.text", "\nNew text");
