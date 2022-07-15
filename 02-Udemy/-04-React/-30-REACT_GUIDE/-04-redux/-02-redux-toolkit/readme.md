# redux toolkit 

### Install
npm install @reduxjs/toolkit

### usage
import {createSlice } from "@reduxjs/toolkit"


### 1 create the store slices 

const nameSlice = createSlice({
  name : '',
  initialState: initialState;
  reducers: {
    method(state, action) {
      you can now mutate the state and it will be merged behind the scenes
    }, 
    new_method(state, action) {
      the argument passed in the action will be on action.payload.someThing
    }
  }
})

### 2 Configure the store

import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    name: nameSlice.reducer,
    otherSliceName:  the_slice.reducer,
  }
})

### Access data 

1- provide the store to the whole app with the Provider component

import {useSelector} from "react-redux";

const data = useSelector(state => state.sliceName.data)


## NOTICE 
you can't access the data outside of the reducer function and mutate it 

always use reducers to manipulate the data

### dispatch actions

export const sliceActions = the_slice.actions;

in the file we want to dispatch action 
import {sliceActions} from "../../....."
import {useDispatch} from "react-redux"

const dispatch = useDispatch();

dispatch(sliceActions.method())

### passing value as argument 
it will be stored in action.payload;

###  Working with back-end

reducers must be pure so it can't have any sideEffect

1- execute it in the component 


using useEffect to get data and store it in redux
and when ever the redux data change it will refetch 
so the state updated and then we send the request 

2- execute it inside the action creator (petter choice)

normal function written in the top level code in the slice that will receive the data

this function will return a function that has a dispatch argument

execute the async code in the returned function that might be dispatch actions or https request

now export this function 

import it in other files

dispatch(the_fn(data))