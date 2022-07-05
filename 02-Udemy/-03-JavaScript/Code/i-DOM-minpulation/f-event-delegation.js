//----------------------- page navigation
document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    // get the id of the element that we want to scroll to
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

//----------- with event delegation
// [1] attach the event to a common container element instead of attaching the same event to every single element

// [2] determine which element originated the event

// [3] make the event according to that target

// [4] write matching strategy so the event happen only in the parts you need
document.querySelector(".nav__links").addEventListener("click", function (e) {
  // e.target is where the event happen
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
