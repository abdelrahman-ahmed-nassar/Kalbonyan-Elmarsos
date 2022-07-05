/*
component in react is just a js function

we use The UpperCase convention in naming the components (functions and files)

create a component => export it => import it => use it

*-----   JSX
you must have one root element per return statement

wrap multiple line with ()

*------- style with CSS
we style every component with css file with the same name (upper convention also)

import the style 

and use classes with [className=""]

*-------  Dynamic data
using js variables in jsx use  {}

inside these {} you can execute any kind of js

*--------  passing data via "props"
use properties on the components jsx 

inside the component use this values defined in the attributes 
access these values using "props" parameter

will be an object which hold all these data

*---------- create wrapper components
Composition => when building large blocks from small blocks

to make your own wrapper components 
use {props.children inside the wrapper component}

to use classes on the custom component jsx 
use the class in the card component
  const classes = "default " + props.className

*------------  closer look at ajx 
import React from "react"

[1] the type of the root element
[2] the attributes configuration 
[other] list of content inside the root element
return React.createElement(
  "div",
  {},
  React.createElement('h2', {}, the content inside the header),
  React.createElement(Expense , {items: expenses}, the content inside the custom component),
  )

*---------- organizing files
in subfolder 
  General [UI]
  specific [Expenses]

update your imports

*---------  using arrow function in the components 
const App = () => {
  
}

*/
