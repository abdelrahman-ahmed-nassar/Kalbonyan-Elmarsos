/////////////////////////////////////
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  // give it the coordinates
  const s1coords = section1.getBoundingClientRect();

  // get the element we clicked [where the event happen not the element it self]
  console.log(e.target);

  //-----  get the current position values
  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);
  // the Y is the distance between the current position and the top of the page

  //---- read the height and the width of the view port
  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //*------------------- old way
  //----- scrolling
  // left position , top position

  // the top is the distance from the viewport not from the whole document
  // when we at the top of the page the top will be big so it will scroll to the proper place but when we go down the top decreased so we don't reach the proper place and to fix that is to add the current scroll position to the top and now it will be relative to the page not the viewport
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

  // implement it with smoothing
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });

  //*------------- new way
  // with the thing we want to scroll to
  // work only in new browser
  section1.scrollIntoView({ behavior: "smooth" });
});
console.log(section1.getBoundingClientRect());
