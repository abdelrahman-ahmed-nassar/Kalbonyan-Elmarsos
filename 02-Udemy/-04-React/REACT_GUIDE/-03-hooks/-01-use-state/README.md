## HOW TO USE

### import

import {useState} from "react";

### Configure

const [STATE_NAME, STATE_CONSTRUCTOR_FUNCTION] = useState(INITIAL_VALUE);

### use the state

console.log(STATE_NAME)

### CHANGE THE STATE [mutate the original value]

STATE_CONSTRUCTOR_FUNCTION(NEW_STATE_VALUE)

### CHANGE THE STATE DEPEND ON OLD STATE

STATE_CONSTRUCTOR_FUNCTION(previousState => {
return previousState++;
})

### CHANGING STATE EFFECT ON THE COMPONENT

when ever the state updates the cmp will rerender

### USING MULTIPLE STATES

you can just have more than one state normally
const [STATE_NAME_1, STATE_CONSTRUCTOR_FUNCTION_1] = useState(INITIAL_VALUE);
const [STATE_NAME_2, STATE_CONSTRUCTOR_FUNCTION_2] = useState(INITIAL_VALUE);
const [STATE_NAME_3, STATE_CONSTRUCTOR_FUNCTION_3] = useState(INITIAL_VALUE);

### USING ONE STATE INSTEAD

const [STATE_NAME, STATE_CONSTRUCTOR_FUNCTION] = useState({
STATE_NAME_1: INITIAL_VALUE,
STATE_NAME_2: INITIAL_VALUE,
STATE_NAME_3: INITIAL_VALUE,
});

### UPDATE THE ONE STATE

STATE_CONSTRUCTOR_FUNCTION((previous) => {
...previous,
STATE_NAME_2: NEW_VALUE
})

### PASSING STATE DOWN

using the a property on the child cmp in the parent cmp file attached to the value
access this value in the child cmp file using props

### PASSING STATE UP

by passing function that take the value as an argument

### TWO WAY BINDING

const [enteredText, setEnteredText] = useState("");

const inputChangeHandler = (event) => {
setEnteredText(event.target.value);
}

`<input onChange={inputChangeHandler} value={enteredText}></input>`
