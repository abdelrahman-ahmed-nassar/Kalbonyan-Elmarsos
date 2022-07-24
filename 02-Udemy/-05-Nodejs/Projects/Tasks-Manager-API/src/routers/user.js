const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const sharp = require("sharp");
const { sendWelcomeEmail, sendCloseEmail } = require("../emails/account");
// create user
router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();

    res.status(201).send({ user, token });
  } catch (error) {
    res.status(404).send(error);
  }
});

// login
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// logout
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

// logout of all
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    const user = req.user;
    user.tokens = [];
    await user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

// read user profile
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

// update user
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["email", "name", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  const user = req.user;

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  try {
    updates.forEach((update) => (user[update] = req.body[update]));

    await user.save();

    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// delete user
router.delete("/users/me", auth, async (req, res) => {
  const id = req.user._id;
  const user = req.user;

  try {
    await user.remove();
    sendCloseEmail(user.email, user.mail);
    res.send(req.user);
  } catch (error) {
    res.status(500).send();
  }
});

const upload = multer({
  limits: {
    fieldSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
      return cb(new Error("Please upload photo"));
    }
    cb(undefined, true);
  },
});

const errorMiddleWare = (req, res, next) => {
  throw new Error("");
};

// create avatar
router.post(
  "/users/me/avatar",
  auth,
  upload.single("avatar"),

  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// delete avatar
router.delete("/users/me/avatar", auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.send();
});

// get the image
router.get("/users/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.avatar) {
      throw new Error();
    }

    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (error) {
    res.status(400).send();
  }
});
module.exports = router;
