use the bcrypt package to hash the passwords

```
// encryption
const bcrypt = require("bcryptjs");


const hash = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 8);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log(isMatch)
};
hash("Red327462!");
```

**encrypt the password in the model**

separate the schema object

use the pre or post methods on the schema

```
userSchema.pre("save", async function (next) {
  const user = this;


  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next();


});

```

**To make the schema work on update**
change the how you defined the router

    const user = await User.findById(req.params.id);

    updates.forEach((update) => user[update] = req.body[update])

### make login functionality

to make the login function in the model schema

userSchema.statics.FunctionName = async (email, password) => {

}

**make the email unique**
set the unique prop in the schema to true

**verify the user credentials**

```
  const user = await User.findOne({ email });

  if (!user) throw new Error("Unable to login");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Unable to login");

  return user;
```

**\*use the created function**

```
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
```

### make the routes private

user will create account then login then get a token (Json Web Token JWT)

use the jsonwebtoken library

require it as jwt

### create jwt token

const token = jwt.sign({_id (unique thing)}, "secret signature", {options like expiresIn: "7 days"});

**decode the middle part of the token to get the json**
https://www.base64decode.org

### verify the token

const data = jwt.verify(token, "secret signature");
will return the id and the timestamp

**make functions accessible on the instances**
userSchema.methods.generateAuthToken = async function () {
const user = this;
const token = jwt.sign({ \_id: user.\_id.toString() }, "nihilism");
return token;
}

you can now send the token within the request and also save it in the user document

### make routes require token

**express middleware**
app.use((req, res, next) => {
// put the thing that will happen between using the route and the route handling
console.log(req.method, req.path);

next();
})

**express middleware for a specific route**
put the middleware function in a separate file and export it
go to a specific route
put the middleware function as a second argument for a specific router

**use the request header to login with token**
key: Authorization
value: Bearer SPACE TOKEN

**access the data header**
const token = req.header("Authorization").replace("Bearer ", "")

**validate the token**
const decoded = jwt.verify(token, "nihilism")


### set up postman environment
make environment and set variables

**use the variable**
{{name}}

**use the authorization tab instead of the headers tab**
use inherit from parent
set authorization on the parent folder
disable auth on the not require requests
will work just the same

**add the pre test code to the request**
add the token variable in the environment
in the parent folder tests tab
if (pm.response.code === 200) {
    pm.environment.set("authToken", pm.response.json().token)
}

### add the logout route

```
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token ) => {
      return token.token !== req.token
    }); 
    await req.user.save();

    res.send()
  }catch (error) {
    res.status(500).send()
  }
})

// logout of all 
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    const user = req.user;
    user.tokens = [];
    await user.save();
    res.send()
  }catch (error) {
    res.status(500).send()
  }
})

```

### hide the private data
```
userSchema.methods.getPublicProfile = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens

  return userObject
}
```

**second solution**
just name the same method toJSON 


### make relation between the user and the task
each task will store the id if the user who created it

### make ref between two models
use the ref property on the owner property

use the 
await Task.populate("owner")
console.log(task.owner);
will be the owner profile

### create virtual property
```
userSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "owner",
})
```

### access the virtual property

```
  const user = await User.findById("62d5a68113d763652f327dfa");
  await user.populate("tasks");
  console.log(user.tasks);

```