
# style with CSS


1- `inline style`

style={OBJECT_OF_THE_PROPERTIES}
the key must the property name in camel case or is surrounded by quotes 

2- `normal style`

- create normal css file with convention for its name to be the same as the js file
- import it in the js file like `import "./style.css`
- use the className="ANY_Class"

3- `css modules`

- name the file NAME.module.css
- import classes from that file
- use it like <p className={classes.text}></p>
- for class names that had hyphen use the bracket notation <p className={classes["header-text"]}></p>
- for multiple classes use the template literal syntax  <p className={`${classes.text} ${classes.header}`}></p>

4- `styled components library`

- [1] install the package 
  npm install --save styled-components

- [2] import the package 
  import styled from "styled-components";

**create styled component**
const Button = styled.button``;

button is method  [you have a method for all the elements]  

you add the style inside the ``

for pseudo classes use & like =>  &:focus {}

**add dynamic props to styled component**

- you can do conditional style if you want 

- you can utilize another feature of the styled component package

**add a prop to your styled component**

you access its value between the `` 

put a function that receive the props and do thing accordingly
`${props => props.the-property-name - condition ? : }`

**dealing with media query**

don't use classes inside the media just but the style you want to be in the element

