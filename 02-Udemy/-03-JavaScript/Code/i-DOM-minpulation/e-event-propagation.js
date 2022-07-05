//*------------------ event bubble
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 365)},${randomInt(0, 365)},${randomInt(0, 365)})`;
console.log(randomColor());

//--------- add event to

/*
now when we click on the a that is inside the nav_links and the nav 
all the three event will be handles although we didn't click on the other elements and the because of the event bubble phase 


bubble phase 
[when the event happen on child will happen on child and then will bubble to the parent]

capture phase  [rarely use]
[when the event happen on the child it will happen first on the parent and go down to the child]

to make it happen we set third parameter the event function and set it to true
and now 

*/

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  // e.target is where the event happen
  // e.currentTarget is the element the event attached to
  console.log(e.currentTarget === this);
  // true

  // Stop propagation
  // e.stopPropagation();
  // when click on the child link the parent won't change 
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});
document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});
