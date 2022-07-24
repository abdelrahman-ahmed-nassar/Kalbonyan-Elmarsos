# JSX


## FUNCTIONAL COMPONENTS

component in react is just a js function

we use The UpperCase convention in naming the components (functions and files)

### STEPS

- create a component [rafce snippet]
- export it as a default export
- import it in other components
- use it

## JSX RULES

you must have one root element per return statement

To wrap multiple line use ()

## Dynamic data in jsx components
using js variables in jsx use {}

inside these {} you can execute any kind of js expression

**passing data via "props"**
use properties on the components jsx

inside the component use this values defined in the attributes
access these values using "props" parameter

will be an object which hold all these data


**using fragmant as a wrapper cmp**
- import {fragmant}from "react;
- use it as a wrapper cmp

**closer look at ajx**
function components in s syntactic sugar for the createElement function 
import React from "react"

return React.createElement(
"div",
{},
React.createElement('h2', {}, the content inside the header),
React.createElement(Expense , {items: expenses}, the content inside the custom component),
)
**arguments it receives**
[1] the type of the root element
[2] the attributes configuration
[other] list of content inside the root element
