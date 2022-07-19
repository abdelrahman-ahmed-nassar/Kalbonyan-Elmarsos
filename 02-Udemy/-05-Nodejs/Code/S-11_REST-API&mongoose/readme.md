### install mongoose

in mongoose we don't specify the db name separately instead we put it at the end of the url


mongoose.connect("mongodb://127.0.0.1:27017/tasks-manager-app", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

### create a model (SCHEMA)

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number
  },
})


### Create a model instance 
const me = new User({name: "abdelrahman", age: 27});


### save the data
me.save().then((result) => {
  console.log(me);
}).catch((error) => console.log(error));


### Data validation

make field required 
required: true;

### custom validator 
validate(value) {
  if () throw new Error
}

### use custom package 
npm validator

### set default value 
use the default attribute on the field#


### trim the string 
use the trim proprty and set it to true


### set up an end points for sending data (POST)
create the express app server and run it 

set a post request using app.post

**access incoming json**
write this line 
app.use(express.json())
use req.body to access the incoming data

**save incoming data in the db**
use the models to save the data to the db

**set up the status code**
res.status(400).send(error)


### Access data (GET) with mongoose
use Methods on the model 

**get all data**
Model.find({}).then(result => {}).catch(error => {});
**get one document**
Model.findOne()
or 
Model.findById()

**Making dynamic routes**

use the :name after the path

access the params =>  req.params  


### update a document 

Model.findByIdAndUpdate("62d0288cd1a823e27ae3e703", {age: 1}).then().catch();

**do more than async operation**
use the promise chaining

### delete a document
Model.findByIdAndDelete("62d0288cd1a823e27ae3e703").then().catch();


### UPDATE DOCUMENT (PATCH)
    const user = await User.findByIdAndUpdate(req.params.id, req.body , {new: true, runValidators: true});

**set the allowed updates**

  const allowedUpdates = ["email", "name", "password", "age"];

```
  const allowedUpdates = ["email", "name", "password", "age"];
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({error: "Invalid updates"})
  }
```


### Delete Document (DELETE)

```
  const _id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
```

### Create Router 
const router = new express.Router();

router.get("/test", (req, res) => {
  res.send("test")
})

### register the router 
app.use(router)