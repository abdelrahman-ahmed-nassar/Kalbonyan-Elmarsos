### NoSQL DB 


**Collection** List of entires
**Document** each entry in the collection 
**fields**  The set of data of the document


### install mongoDB

go to https://www.mongodb.com/try/download/community 

download the zip file

put the extracted folder in the uses 

/Users/hp/mongodb/bin/mongod.exe --dbpath=/Users/hp/mongodp-data


download roboto 3t 

download mongodb module via npm

### connect to the database
// curd

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "tasks-app";

mongoClient.connect(connectionUrl, {
  useNewUrlParser: true,
}, (error, client) => {
  if (error) return console.log("unable to connect to the data base")
  console.log("connect to the database successfully");
});


### create a database 

const db = client.db(databaseName);

### insert a collection 
db.collection("users").insertOne({
    name: "abdelrahman", 
    age: "18"
  }, (error, result) => {
    if (error) return console.log("error);

    console.log(result.insertedId)
  })

**insert multiple collections at the same time**
take an array of objects instead of one object and it will just do the same


**create Object ID**
const {MongoClient, ObjectId} = require("mongodb")

const id = new ObjectId();


**get the time stamp**
console.log(id.getTimestamp())

you can use that id manually via the _id property

id is in binary 

convert it into string => id.toHexString()

### GET DOCUMENTS FROM THE DB

**FIND SINGLE DOCUMENT**
db.collection("collectionName").findOne({}, (error, TheDocument) => {})


ig the document you searched for does not exist it will return null

find one will return the first one

**Search by id**
    db.collection("users").findOne({_id: ObjectId("62cd746157d7400d7eb16e38")})


**FIND MULTIPLE DOCUMENT**

const Cursor__Pointer = db.collection("name").find({criteria})

**get the data in array form**

db.collection("name").find({criteria}).toArray((error, ArrayOfTheDocumentS) => {})

**Count the number of the document**
db.collection("name").find({criteria}).count((error, TheNumber) => {})

## Promises 
you can instead of using the callback function use the promise methods (then, catch)

### update document in a collection

 const promise = db.collection().updateOne({criteria}, {
  $set: {
    name: "value"
  }
  // increment a value
    $inc: {
    age: 2
  }
 })

you can just chain the then and catch

### update multiple documents in a collection
updateMany(filter, update, option)
db.collection("tasks").updateMany({completed: true}, {$set : {
      completed: false
    }}).then((result) => {
      console.log(result.modifiedCount)
    }).catch((error) => {
      console.log(error)
    })

### Deleting One document
db.collection().deleteOne(filter)


### Delete multiple documents
db.collection().deleteMany(filter)

db.collection("users").deleteMany({
      age: 27
    }).then(result => console.log(result)).catch(error => console.log(error))