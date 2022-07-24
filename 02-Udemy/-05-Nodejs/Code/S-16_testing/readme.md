### install jest package

npm install jest --save-dev

add this script
"test": "env-cmd -f ./config/test.env jest --watch --runInBand"

create test directory

create the file with this name convention
name.test.js

### create the first test

test("name", () => {})

### use the expect function

expect(value).toBe(value);

### test async code

use the done param
test("name", (done) => {
// after every thing is done
done();
})

OR

just use async function

### create test variables environment

use another db with test name
add the env-cmd to the test script

**add the jest root property**

"jest": {
"testEnvironment" : "node"
},

### install the supertest package

npm i supertest

**setup the first test**

```
const request = require("supertest");
const app = require("../src/app");

test("should signUp a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "abdelrahman",
      email: "abdelrhman.ahmed.nassar@gmail.com",
      password: "1234567",
    })
    .expect(201);
});

```

### jest setup

**reset the db**

```
beforeEach(async () => {
  await User.deleteMany();
});

afterEach(() => {
  console.log("AfterEach");
});

```

**leave some data for test cases**

```
const userOne = {
  name: "Mike",
  email: "mike@gmail.com",
  password: "1234567",
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});
```

### test with auth

```
const userOneId = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneId,
  name: "Mike",
  email: "mike@gmail.com",
  password: "1234567",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

```

```
test("Should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

```

### advanced Assertion

**test the database**
save the user coming from the request

```
  // Assert that the db was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();
```

**test the response body**

```
  // Assertion about the response
  expect(response.body).toMatchObject({
    user: {
      name: "abdelrahman",
      email: "abdelrhman.ahmed@gmail.com",
    },
    token: user.tokens[0].token,
  });
```

**Assert the passwords hashing**

```
  // assert the password
  expect(user.password).not.toBe("1234567");
```

### Mocking libraries

in the tests folder create \_**mocks** folder
put the same structure as in the require
export the functions

### assert files upload

```
test("Should upload avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .attach("avatar", "tests/fixtures/photo.jpg")
    .expect(200);
});
```

**use the loose equality**
expect({}).toEqual({});
