let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

//****************************************************************/
//*     slice method     [doesn't mutate the original array ]

//---------extract part from an array

// the original array won't be changed we just have created new one

// .slice(starter-index, end-parameter)
arr.slice(2, 5);
// mean from 2 index to the 4 index
//NOTICE the end index is not included
// the number of elements will be the (end-parameter  -  start-parameter)

// counting from the end
arr.slice(-2);
// will take the last two elements
// the last element in the array
arr.slice(-1);
arr.slice(1, -2);

//------------------ create shallow copy
const arrCopy = arr.slice();
const arrayCopy2 = [...arr];

//*******************************************************************/
//*    splice method    [mutate the original array ]

//--------- delete element from the original array and change it

// .splice(start index , delete count, adding item);

// arr.splice(2);
console.log(arr);
// will have just 2 elements

// remove the last element
arr.splice(-1);
arr.pop();

arr.splice(3, 5);
// will start from 3 and delete 5 elements

//***********************************************/
//* reverse method    [mutate the original array]

const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

//**********************************************/
//* concat method  [joining more than array into new one]

const letters = arr.concat(arr2);
console.log(letters);
// other way
console.log(...arr, ...arr2);

//*****************************************************/
//*   join method [turn the array into string with ability of adding separator]

console.log(letters.join("-"));
