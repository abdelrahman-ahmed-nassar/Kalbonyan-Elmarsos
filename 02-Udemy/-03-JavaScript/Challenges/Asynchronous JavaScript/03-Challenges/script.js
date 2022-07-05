const imgContainer = document.querySelector(".images");

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

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

const loadNPause = async function () {
  try {
    // 1
    let img = await createImg("img/img-1.jpg");

    await wait(2);

    img.style.display = "none";

    // 2
    img = await createImg("img/img-2.jpg");

    await wait(2);

    img.style.display = "none";

    // 3
    img = await createImg("img/img-3.jpg");

    await wait(2);

    img.style.display = "none";
  } catch (err) {}
};

loadNPause();

// ------------- build the load all
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
