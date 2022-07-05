// ************** string method

/*
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]); // count the spaces
console.log(theName[100]); // give undefined

console.log(theName.charAt(1)); // count the spaces
console.log(theName.charAt(100)); // give ""

console.log(theName.length); // count the spaces
console.log(theName.trim()); // delete the spaces

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase()); //chain method
/*
- indexOf(value [Mandatory], start [optional ] ==> 0)
- lastIndexOf(value [mandatory], start [opt] length)
- slice(start [Mandatory], End [optional] Not include the end)
- repeat(times)
- split(separator [opt], limit [opt])
*/
let s = "Elzero web school";

console.log(s.indexOf("web")); // give you ==> 7
console.log(s.indexOf("web"), 8); // give you ==> -1

//? search from the last
console.log(s.lastIndexOf("o")); //  give you => 15

//! not including the end
console.log(s.slice(2, 8)); // "zero w"

//? count from the last
console.log(s.slice(-5)); // "chool"
console.log(s.slice(-5, -3)); // "ch"

console.log(s.repeat(5));

//? changing the string into a array
console.log(s.split()); // => ["Elzero web school"]

console.log(s.split("")); // make every character as an element in the array

console.log(s.split(" ")); // ["elzero", "web", "school"]

console.log(s.split(" ", 2)); // ["elzero", "web"]

console.log(s.split("", 6)); // ["e" , "l", "z", "e", "r", "o"]

/*
  String Methods
  - substring(Start [Mandatory], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mandatory], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mandatory], Start [Opt] Default 0) [ES6] ==> give boolean 
  - startsWith(Value [Mandatory], Start [Opt] Default 0) [ES6] ==> give boolean
  - endsWith(Value [Mandatory], Length [Opt] Default Full Length) [ES6] ==> give boolean
*/
s = "Elzero web school";
// ! not including the end
console.log(s.substring(2, 6)); // zero
console.log(s.substring(6, 2)); //zero
console.log(s.substring(-10, 6)); // Elzero
console.log(s.substring(6, 2));

console.log(s.length); // 17
console.log(s.substring(16)); //  "l"
console.log(s.substring(s.length - 1)); //  "l"

console.log(s.substring(s.length - 5, lenth - 3)); //  "ch"

//! the end dealing with character not index  mean count not go to index
console.log(s.substr(0)); // the whole string
console.log(s.substr(0, 6)); // "elzero"

console.log(s.substr(100)); // ""

console.log(s.substr(-3)); // "ool"

console.log(s.substr(-5, 2)); // "ch"

console.log(s.includes("web")); // ==> true
console.log(s.includes("web", 8)); // ==> false
//! include the start point
console.log(s.startsWith("E")); // ==> true
console.log(s.startsWith("E", 2)); // ==> false
console.log(s.startsWith("z", 2)); // ==> true
console.log(s.startsWith("zero", 2)); // ==> true
//! take the length not the index
console.log(s.endsWith("l")); // ==> true
console.log(s.endsWith("l", 6)); // ==> false
console.log(s.endsWith("ro", 6)); // ==> true

// ********* challenge

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let n = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(); // Zero

// 8 H
console.log(); // HHHHHHHH

// Return Array
console.log(); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(); // eLZERO WEB SCHOOl
