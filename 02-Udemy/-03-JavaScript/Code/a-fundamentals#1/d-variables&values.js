console.log("jonas"); // this is a value
console.log(23); // this a value

// declaring a variable

let the_name_of_the_variable = "the value of the variable";

console.log(the_name_of_the_variable);
// and the result will be the value of the variable

// naming conventions for variable
/* 
[1]the stander is the camel case  
[2]naming the variable is case sensitive
[3]the variable name can't start with number 
[4]it can only contain string or number or underscore or dollar sign [just this 4]
[5]don't use the keywords as a variable because its reserved by the language 
such as new , function , let , const  
[6] don't call your variable  (name)  although its allowed 
[7] use lower cases for the variables
[8] use upper case for naming a constant  let PI = 3.1415

make your variable clear and simple and descriptive 
*/

// other ways to declaring a variables
/* 
1-{const}    => use it as much as possible
  [1]for the values that is immutable 
  [2]can't be changed    
  [3]can't be empty and must have initial value   
  [4]can't be redeclare 
  [5]when redeclare will give you an error and alert you
  [6]you can't access before declare ( error)
  [7]variable scope drama [added to windows object] (no) 
  [8] create block scope 


2-{let}
  [1]for mutable variable 
  [2]can changed     
  [3]can be empty and then reassign its value 
  [5]when redeclare will give you an error and alert you
  [6]redeclare(No => error)
  [7]access before declare ( error)
  [8]variable scope drama [added to windows] (no)
  [9] create block scope 


3-{var}  the old way  and don't use it 
  [1]for mutable variable 
  [2]can changed     
  [3]can be empty and the assign its value 
  [4]when redeclare won't tell you   
  [5]redeclare (yes)
  [6]access before declare ( undefined)
  [7]variable scope drama [added to windows] (yes)
  [8] don't create block scope
*/

// you can declare more than one variable in the same line

let a = 10,
  b = 9;
