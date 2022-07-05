/*

--------- approaches for adding dynamic style to your components 

[1] 
adding conditional inline style 

[2] 
add dynamic classes

----- using styled component 
using styled components package 

- [1] install the package 
  npm install --save styled-components

- [2] import the package 
  import styled from "styled-components";

- [3] Don't use the component function instead use a constant like that 

const Button = styled.button``;

ticked template 

button is method  [you have a method for all the elements] 
``  like the ()  

you add the style inside the ``

for pseudo classes use =>  &:focus {}

------- add dynamic props to styled component
you can make more than component in one file 

you can do conditional style if you want 

Or 

utilize another feature of the styled component package

add a prop to your styled component

you access its value between the `` 

put a function that receive the props and do thing accordingly
like ${props => props.the-property-name - condition ? : }

/------ dealing with media query 

don't use classes inside the media just but the style you want to be in the element


/-------------- CSS modules 
need to be supported in the project 

now you should import the css file like that 

[1] rename it to be like  my-file.module.css

[2] import styles from "./my-file.module.css"

styles will be an object that have every class you defined as a property

className={styles.button__active}

** the advantage that the styled will be scoped 

/----------- dynamic style with css modules

if the name of the class has - you can do that
styles["form-control"]

to add dynamic style use ``

like that

className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
*/
