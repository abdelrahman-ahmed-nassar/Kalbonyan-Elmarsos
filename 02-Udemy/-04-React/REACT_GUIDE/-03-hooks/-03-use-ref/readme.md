# useRef()

### IMPORT

- import {useRef} from "react";

### CONFIGURE


const inputRef = useRef();
```<button ref={inputRef}>```

input red is the actual dom node

### ACCESS DATA

inputRef.current.value


### FORWARDING REFS

To use the ref on a custom cmp in a parent file

in the child cmp file 

1- import {useImperativeHandle} from "react";

2- useImperativeHandle(THE_SECOND_ARG_IN_THE_FUNCTIONAL_CMP, () => {
  // all what you return will be the value of current
  return {
    pointer: FUNCTION_WE_WANT_TO_ACCESS_FROM_OUTSIDE
  }
})

3- wrap your function cmp with React.forwardRef()