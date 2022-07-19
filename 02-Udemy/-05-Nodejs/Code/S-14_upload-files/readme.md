### use multer

to make the ability to send files

- require multer
- create configured instance
  const upload = multer({
  dest: "images",
  })

**support the multer in the router**
use the upload.single("name") as a middle ware in the router

in postman send form-data with the same name you picked as a key

### add files validation

**by size**

const upload = multer({
dest: "avatars",
limits: {
fieldSize: 1000000,
},
});

that is 1 megabyte

**by extension**

```
  fileFilter(req, file, cb) {
    const isPdf = file.originalname.endsWith("pdf");
    if (!pdf) {
      return cb(new Error("Must be PDF"));
    }
    cb(undefined, true)
  },
```

### handle errors

by adding third callback function to the route

```
}, (error, req, res, next) => {
  res.status(400).send({error: error.message})
});

```

### adding image to user profile

add the avatar field with type Buffer

**save the file data**
remove the dest property

**access the data**
req.file.buffer;

### serving up the files

```
router.get("/users/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user || !user.avatar) {
      throw new Error();
    }

    res.set("Content-Type", "image/jpg");
    res.send(user.avatar);
  } catch (error) {
    res.status(400).send();
  }
});
```

### auto-cropping and image formatting

use the sharp package

```
    const buffer = await sharp(req.file.buffer).resize({width: 250, height : 250}).png().toBuffer()
    req.user.avatar = buffer;
```
