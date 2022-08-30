const { MongoClient, ObjectID } = require("mongodb");
const Collection = require("mongodb/lib/collection");
const connect = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connect, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database");
  }

  const db = client.db(databaseName);

  //* Inserting users in database

  // db.collection("users").insertOne(
  //   {
  //     name: "abdelrahman",
  //     age: "18",
  //   },
  //   (error, result) => {
  //     if (error) return console.log("error");

  //     console.log(result.insertedId);
  //   }
  // );

  //     console.log(result.ops)
  // })

  //* Inserting tasks in database

  // db.collection('tasks').insertMany([
  // {
  //     name: "abdelrahman",
  //     age: "18",
  // }
  // ]
  //     , (err, result) => {
  //         if (err) {
  //             return console.log('Unable to insert tasks')
  //         }
  //         console.log(result.ops)
  //     })

  //* Finding data from database

  // db.collection('tasks').findOne({ _id: new ObjectID('06f1c560a322567c33251c43') }, (err, result) => {
  //     if (err) {
  //         return console.log('Unable to find task')
  //     }

  //     console.log(result)
  // })

  // db.collection('tasks').find({ completed: false }).toArray((err, result) => {
  //     if (err) {
  //         return console.log('Unable to find user')
  //     }

  //     console.log(result)
  // })

  //* Updating users data

  // db.collection('users').updateOne({
  //     _id: new ObjectID('06f1c560a322567c33251c43')
  // }, {
  //     $inc: {
  //         age: 1
  //     }
  // }).then((result) => {
  //     console.log(result)
  // }).catch((error) => {
  //     console.log(error)
  // })

  //* updating tasks

  // db.collection('tasks').updateMany({
  //     completed: false
  // }, {
  //     $set: { completed: true }
  // }).then((result) => {
  //     console.log(result)
  // }).catch((error) => {
  //     console.log(error)
  // });

  //* Deleting task
  // db.collection("tasks")
  //   .deleteOne({
  //     _id: new ObjectID("62c0a429d644687f8865ac23"),
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});
