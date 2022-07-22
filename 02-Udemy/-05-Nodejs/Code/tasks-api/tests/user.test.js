const { ObjectId } = require("mongoose");
const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");
const { userOne, userOneId, setupDataBase } = require("./fixtures/db");

beforeEach(setupDataBase);

afterEach(() => {
  console.log("AfterEach");
});

test("should signup a new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "abdelrahman",
      email: "abdelrhman.ahmed.nassar@gmail.com",
      password: "1234567",
    })
    .expect(201);

  // Assert that the db was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // Assertion about the response
  expect(response.body).toMatchObject({
    user: {
      name: "abdelrahman",
      email: "abdelrhman.ahmed.nassar@gmail.com",
    },
    token: user.tokens[0].token,
  });

  // assert the password
  expect(user.password).not.toBe("1234567");
});

test("Should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);

  const user = await User.findById(userOneId);

  expect(response.body.token).toBe(user.tokens[1].token);
});

test("Should not login existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "",
      password: "",
    })
    .expect(400);
});

test("Should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should Not get profile for unauthorized user", async () => {
  await request(app).get("/users/me").send().expect(401);
});

test("Should delete account for user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});

test("Should NOT delete account for unauthorized user", async () => {
  await request(app).delete("/users/me").send().expect(401);
});

test("Should upload avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .attach("avatar", "tests/fixtures/photo.jpg")
    .expect(200);

  const user = await User.findById(userOneId);
  // expect({}).toBe({});
  expect(user.avatar).toEqual(expect.any(Buffer));
});

test("should Update the valid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      name: "Jess",
    })
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user.name).toEqual("Jess");
});

test("should Not Update the invalid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      location: "cairo",
    })
    .expect(400);
});
