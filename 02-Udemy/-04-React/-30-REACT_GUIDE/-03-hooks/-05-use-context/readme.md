# useContext

## CONFIGURE

- create store folder
- create context file
- import React from "react";

## CREATE CONTEXT

const Context = React.createContext(INITIAL_STATE_CONFIGURATION_USUALLY_OBJ);

That will hold the context value

**You should export the context**

export default AuthContext

## Provide the context 
import Context from "./store/context"

make the <Context.Provider value={
  THE_VALUE;
}> 

As the wrapper of the most parent component that contains all the other components that wants to have access to the data 

## Access value

import Context from "./store/context"
import {useContext} from "react

const ctx = useContext(Context);

console.log(ctx.value);

### change values 
you can add function on the provider value that manipulate the sate and then call this functions in the child cmp 

### PASSING FUNCTIONS WITH CONTEXT

in the provider value property
make new property and point to function 


### CUSTOM CONTEXT PROVIDER
you can create custom context provider that return {props.children} and export it 