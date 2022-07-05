// the handler function can only take one argument
// so we use its key word as an argument

//*----------------------- Menu fade animation

const handelHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;

    const siblings = link.closest("nav").querySelectorAll(".nav__link");

    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      // so we don't choose the hovered element
      if (el !== link) el.style.opacity = this; // opacity
    });
    logo.style.opacity = this; //opacity
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handelHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handelHover(e, 1);
// });

nav.addEventListener("mouseover", handelHover.bind(0.5));
nav.addEventListener("mouseout", handelHover.bind(1));
