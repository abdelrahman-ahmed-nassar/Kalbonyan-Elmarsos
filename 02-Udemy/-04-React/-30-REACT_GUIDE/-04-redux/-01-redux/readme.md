# REDUX 

we have one central store that carry all the data 

### Install redux
npm install redux 
npm install react-redux


### IMPORT REDUX

import {createStore, whatYouNeed} from "redux";

### CREATE A STORE 
const store = createStore(reducerFn)

### REDUCER FUNCTION 

must be pure function so the same inputs always return the same outputs

it receive the latest state snapshot (usually an object) and the action 

it must return new state (usually an object)

EX:_ const reducer = (state = {initial value}, action) => {
  if (action === "SOME_THING") {
    return SOME_THING
  }

  return state;
}

when update the state you should return all the state value even it didn't update;
the returned value will override the latest state 

you should not manipulate the state manually and then return it

### EXPORT STORE
export default store


### PROVIDE THE STORE TO OTHER COMPONENTS

go to the highest level of the components

import {Provider} from "react-redux";
import store from "./store/index"

wrap the App component with Provider component with a store property point to the store 

### ACCESS THE DATA FROM THE STORE 

import {useSelector} from "react-redux"

const value = useSelector((state) => state.value);

useSelector give us auto subscription

### dispatch actions  with payload

import {useDispatch} from "react-redux";

const dispatch = useDispatch();

dispatch({type: "IDENTIFIER", value: someValue});
