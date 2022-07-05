/*
*-------- listen to Events

we add property on the element that we want to listen to 
<button onClick={handlerFunction}> </button>

nameConvention 
somethingHandler

*------ how component function executed
when we use the components functions as an elements that like calling it

but react simply only do that once when the page render

*--------- using state 
we import state from react 
import React , { useState } from "react";

inside the component function we call this function 
useState();   =>  react hook

arguments 
  the value you want track if it changed or not 

It return 
  [
  current state value,
  function to update the value
  ]

we use destructuring to get the variable that contain the value and the function 

we use this function with the new value as an argument

*----- close look at useState Hook
every component instance has its own state


------------------------------------------

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}
---------------------------------------
the initial value is considered just in the first time the component is executed 
if the state has changed in a component instance it will be reevaluated 
after reevaluation the tracked value will be the latest value (the updated value)

------------ listen to user inputs
onChange

we ca use an event parameter just like normal js

*------ working with multiple state

you van just simply have more than state in the same component

*-------- using only one state object
when change the object you have to change all the data to keep it

we spread the original object 
...userInput, 

then override the properties we need 
enteredTitle: event.target.value,

const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

*---------- better way of updating state 
when the state is depend in previous state it's better and more safe to use the following way o guarantee that the state you use will the precious state 
bad way of updating state object
    setUserInput({
    ...userInput,
    enteredTitle: e.target.value,
    });

    good way of updating state object
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredTitle: e.target.value,
      };
    });

*-------- two way-binding 
using the value attribute to a state that hold its current value 

and then change this value

*-------  child to parent component communication 
by adding property on the child element custom jsx
its value will be a function that take the data and store it 
we pass the data by a parameter of the component function 
execute the passing function in the child with data

*/
