//--------- select element relative to a certain another element

const h1 = document.querySelector("h1");

//**--------------Going downwards:  [child elements only]

// inside nesting don't matter
// will go deep as necessary

h1.querySelector(".highlight");

//------- get all the direct children  [as a node list]
h1.childNodes;

//-------- get all the direct child element [as HTML element] [life collection]
h1.children;

//-------- get the fist child [as HTML element]
h1.firstElementChild.style.color = "white";

//--------- get the last element [as HTML element]
h1.lastElementChild.style.color = "orangered";

//**-------------- Going upwards : parents

//-------- get the direct parent element [as HTML element]
console.log(h1.parentNode);

// the same [ use it ]
console.log(h1.parentElement);

//----------- get the closet parent with class or identifier [the opposite of query selector ]
console.log(h1.closest(".header"));
// NOTICE
console.log(h1.closest("h1"));
// will be the element itself

//**---------- Going sideways : siblings

// directly before [return HTML element]
console.log(h1.previousElementSibling);
// directly after  [return HTML element]
console.log(h1.nextElementSibling);

// [node]
console.log(h1.previousSibling);
console.log(h1.nextSibling);

//------ get all the siblings
h1.parentElement.children;

//------- convert life collection into an array contain all the elements
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.color = "red";
  }
});
