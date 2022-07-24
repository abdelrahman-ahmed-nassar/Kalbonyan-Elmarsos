# useEffect 


### import 
import {useState} from "react";

### Configure

receive 2 parameters
1- function to be executed 
2- dependencies array 

useEffect(() => {

}, [])

### WHEN IT WILL BE EXECUTED 

**CASES:**
- No dependencies =>  every time the cmp render (every state update)
- EMPTY dependencies array => The first time the component render
- Array of dependencies => When one of the dependencies has changed 


### CLEAN UP FUNCTION 

you return a function in the end of the useEffect function

it will execute
- second time render 
- before the code in the useEffect function 



- controlled components 
  using state
-  Uncontrolled components 
  using refs 



### use async await inside the useEffect 


don't make the useEffect function async 

instead put the async code in a separate function 

then execute it by wrapping it call inside a try and catch 

don't wrap the function code wrap the function execution 