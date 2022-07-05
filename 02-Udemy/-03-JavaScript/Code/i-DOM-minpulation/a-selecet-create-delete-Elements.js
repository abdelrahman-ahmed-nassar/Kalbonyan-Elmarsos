/////////////////////////////////////////////////////////////////

//** selecting element return the Whole HTML code of it

//----- select the entire page
console.log(document.documentElement);

//----- select the head of the page
console.log(document.head);

//----- select the body code
console.log(document.body);

//----- select one and the first match element [the first element]
const header = document.querySelector(".header");
const logo = document.querySelector("#logo");

//----- select multiple elements by class [create node list]
const allSections = document.querySelectorAll(".section");

//----- select element by ID

// NOTICE don't use the #
document.getElementById("section--1");

//----- select all the html tags from a specific kind [create life HTML collection]

// NOTICE  crate HTML collection NOT a node list
// HTML collection is a so-called life collection
// so if the DOM has changed it will be changed
const allButtons = document.getElementsByTagName("button");

//----- get all the element by a specific class name  [create life HTML collection]
document.getElementsByClassName("btn");

////////////////////////////////////////////////////////////

//***  create element and manipulate it

//----- insert HTML code by other element
const html = `<p>Hello</p>`;
const greetEL = document.querySelector(".greet");
greetEL.insertAdjacentHTML("afterbegin", html);

//----- create new element from scratch
const message = document.createElement("div");
// now this element is no where in our DOM
console.log(message);
// <div></div>

// NOW we can manipulate it

//--------- add class
message.classList.add("cookie-message");

//---------- add text inside the element
message.textContent = "we use cookies for improved functionality and analytics";

//---------- add HTML code inside the element
//NOTICE that will reset(delete) the HTML code then add
// you can write inside it just like what you do in the HTML page
message.innerHTML = `<p>we use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button></p>`;

//-------- insert the element [As first child]
header.prepend(message);

//-------- insert the element [As last child]
header.append(message);

//NOTICE now this message element can be just at one place because it's just one element

//------ copy HTML element
// header.append(message.cloneNode(true))

//------- insert the element [before the parent element and make it sibling for it]
header.before(message);

//------- insert the element [after the parent element and make it sibling for it]
header.after(message);

/////////////////////////////////////////////////////////////////////////
//****  Delete element

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // delete the whole element
    message.remove();
    // old way
    message.parentElement.removeChild(message);
  });
