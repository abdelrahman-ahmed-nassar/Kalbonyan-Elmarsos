const imgContainer = document.querySelector(".images");

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

//--------- render the images
const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);

      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImage;

//--------- the timing functions
createImg("img/img-1.jpg")
  .then((img) => {
    currentImage = img;

    // console.log("image 1 loaded");

    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";

    return createImg("img/img-2.jpg");
  })
  .then((img) => {
    currentImage = img;
    // console.log("image 2 loaded");

    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";

    return createImg("img/img-3.jpg");
  })
  .then((img) => {
    currentImage = img;

    // console.log("image 3 loaded");

    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((err) => console.log(err));
