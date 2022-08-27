const fs = require("fs");

const book = {
  title: "My book",
  author: "Ali ahmed",
};

const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);

// console.log(parsedData.author);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.title);

//////// challenge

const bufferData = fs.readFileSync("1-json.json");
const dataJSON = bufferData.toString();
const user = JSON.parse(dataJSON);
user.name = "ali";
user.age = 52;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
