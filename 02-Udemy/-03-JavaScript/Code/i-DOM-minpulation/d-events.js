const h1 = document.querySelector("h1");
const alertH1 = function (e) {
  alert("reading the heading");

  //-------- remove an event listener
  // you need to have the function separated in a variable
  h1.removeEventListener("mouseenter", alertH1);
  // now it will listen to the event just once
};

// you can remove the event in any where
h1.removeEventListener("mouseenter", alertH1);

// or in timer
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

//------- hover  [but not bubble]
h1.addEventListener("mouseenter", alertH1);

//------- hover [ but bubble ]
h1.addEventListener("mouseover", alertH1);

//------- other way of adding events [old way]
h1.onmouseenter = function (e) {
  alert("reading the heading");
};

//------ don't use it but it exist
//------- handle the events with attributes
// <h1 onclick="HTML alert"></h1>
