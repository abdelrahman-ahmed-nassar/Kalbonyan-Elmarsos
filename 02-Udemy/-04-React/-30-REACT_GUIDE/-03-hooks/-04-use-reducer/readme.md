# useReducer 

### IMPORT 
import {useReducer} from "react";


### Configure

const [state, dispatchFn] = useReducer(reducerFn, initialState);

state: The state snapshot in the component re-render evaluation cycle
dispatchFn: A function that can be used to dispatch a new action

reducerFn: a function is triggered automatically once action is dispatched it receive the latest state snap shot and should return the new updated state
initialState: **usually an object**

### ACCESS STATE 
console.log(state)
will be the object with properties you defined

### UPDATE THE STATE

dispatchFn({type: "INCREASE", amount: 2});


### REDUCER FUNCTION 
is written out of the component

const reducerFn = (state, action) {
  if (action.type === "INCREASE") {
    return {...state, number =+ action.amount}
  }

  return THE_INITIAL_STATE_USUALLY_OBJ
}

