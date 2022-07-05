/*
the useEffect() hook to execute the function in it just when the one of the dependencies that in the array changes 

you cad add as a dependency what you use in the function

/----------- debouncing

make some functionality execute after some time 

you can return a function in the useEffect function 

this function don't run in the first side effect execution but after the first one it runs before the side effect execution 


-------  useReducer()

when you have more complex state that is related together and depend on each other 

use it if you update a state depend on an other state 

const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);


[[use the reducer hook when you ant to update a state in the function form but you don't want the previous state just to be the parameter ]]

/----------- context API 

using it to throw data between the needed components

[1] we create the context in new folder 
  with React.createContext()

[2] we set an initial value to it (object)

[3] we wrap the parent element that have all the components that need that data 
  with this <ContextName.Provider />

[4] we wrap the child elements with <ContextName.Consumer />
  it have a child element that will be a function that its parameter will be the initial value of the context

  you should return the jsx code from this function 

you need to set the initial value as a parameter in the provider element  

/----------- useContext()

access a context without wrapping the child element with a <context.Consumer />

you but the context as an argument and the hook simply return the value 

/------ passing functions using dynamic context

you should just pass data if you not using it directly in the same component

[put your functions in the initial value of the context to get better IDE suggestions]


/-------- forwards refs 

to use refs on a custom component 
we should wrap the component function with 

React.forwardRef((props, ref) => {})

*/
