///////////////////////////////////////
const message = document.createElement("div");
message.innerHTML = `we use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>`;
header.prepend(message);

//************ style
// Create an (INLINE) style on the element
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

//NOTICE
console.log(message.style.height);
// cannot access because it is not inline

//------- get all the real style [even that you didn't define it yourself]
const allStyles = getComputedStyle(message);

//------- get a specific style
const messageColor = getComputedStyle(message).color;

//------- modify a style [not inline]
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

//------- modify css custom properties [root variables]
document.documentElement.style.setProperty("--color-primary", "orangered");

///////////////////////////////////////////////
//*********** attributes

//----------- get the standard attributes value
const logo = document.querySelector(".nav__logo");
const link = document.querySelector(".twitter-link");
console.log(logo.alt);
console.log(logo.className);

console.log(link.href);
console.log(logo.src);
// NOTICE give you the absolute URL not the relative like you have in the html
// to get the literal attribute
logo.getAttribute("src");
link.getAttribute("href");

//--------- get any custom or standard attribute
console.log(logo.getAttribute("designer"));

//---------- set the attributes value
logo.alt = "Beautiful minimalist logo";

//-------- create new attribute ans set its value
logo.setAttribute("company", "bankist");

//-------- data attribute [data-what-ever-we-wont]
// <img class = "logo" data-version-number = "3.0"> <img>
console.log(logo.dateset.versionNumber);
// NOTICE we transform it into Camel case

//***** classes

//----- add class
logo.classList.add("c", "j");

// NOTICE don't use this way
logo.className = "jonas";
// reset all the classes and allow one class only

//---- remove class
logo.classList.remove();

//----- toggle class [if open close // if close open]
logo.classList.toggle();

//------ check if the class exist
logo.classList.contains();
