//-------------------- OLD WAY
// calc the position of the place we wont the element to be sticky on
const initialCoords = section1.getBoundingClientRect();

window.addEventListener("scroll", function () {
  // get the current scroll from the top of the document
  // console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

//*-------------------- The Intersection Observer API
const obsCallback = function (entires, observer) {
  entires.forEach((entry) => {});
};

// This right. So this callback function here will get called each time that the observed element, so our target element here, is intersecting the root element at the threshold that we defined
const obsOptions = {
  root: null,
  // null mean relative to the doucment
  threshold: [0, 0.2],
  // mean will consider the element is in the view if 10% of the element is appear
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
