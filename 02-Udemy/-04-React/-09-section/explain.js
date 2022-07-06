/*

/----- solve the problem that we have to return just one root jsx element 

[1] wrap the adjacent elements with root div  => (div soup)

[2] put the elements in an array and add keys manually 

[3] create a wrapper component 
const Wrapper = (prop) => {
  return prop.children;
};

export default Wrapper;

/---------- fragments  [built-in react wrapper]
import React from "react";

<React.Fragment>
  <h2>Hi there </h2>
  <p> this</p>
</React.Fragment>

or 

import {Fragment} from "react"

<Fragment>
  <h2>Hi there </h2>
  <p> this</p>
</Fragment>

OR [But need custom setup so use the above way]

<> 
  <h2>Hi there </h2>
  <p> this</p>
</>


/---------------- react portals 
don't change the how react code structured but change how the dom is structured 

[1] you need a place that you want to put the component in 
  create a new root element in the index.html file like 
  <div id="backdrop-root"></div>

[2] let the component know it should portal to that place
  import ReactDOM from "react-dom"

  {ReactDom.createPortal(the react node[jsx component]   ,   the root element selected like document.getElementById())}

/------------- refs 
allow you to manipulate the other element

[1] create a useRef() using useRef hook from the react library

assign that useRef() to a variable

connect the html element with the ref using the special ref attribute

the value of the ref will be the element itself  BUT in object (dom node)
all the property will be in the current property

///////////
if you want to read a value => refs
if you want to change a value => state

----------------------------

/- controlled components 
  using state
/-  Uncontrolled components 
  using refs 


*/
