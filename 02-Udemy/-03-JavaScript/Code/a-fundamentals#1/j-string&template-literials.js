/* 
when using a string you put it in a double quotation mark or in a single 
but inside it you can use just the opposite  like 
" i'm "  =>  right
" " this is a quote " " => wrong 
'" this is a quote "'  => right 

there is some thing called  escape sign [\]
which mean any character come after it the console will deal with that like a separated strings    like  
console.log("the Quote says \"less is more work\"  ")
you can use it in ignore spaces 
console.log("the Quote says\
less is \
more work\") and now all of that will be printed in the same line 

the [\n]
will add a break line like pressing an enter 
*/

// concatenating strings

// the old way of doing that is using the + operator

let a = "we love";
let b = "java script";
document.write(a + "" + b);
console.log(a, b);

// an other example

const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a" + (year - birthYear) + "years old " + job;

// new way with ecma script and template literals
// we put any expression in the ${}
jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;

`backtick`;
console.log(`${a} ${b}`); //pressing space will add space

console.log(`${a} 
${b}`); //now we have enter without \n

console.log(`${a} "string" ${b}`);
// you can use double and single quote

console.log(`${a} ${200 * 10}`);

let markUp = `
  <div class="card">
    <div class="child">
    <h2>Title</h2>
    <p>paragraph</p>
    </div>
  </div>
`;
// respect spaces and don't need \ or \n and more than that you can use variables
let title = "heading";
let description = "My web page";

markUp = `
  <div class="card">
    <div class="child">
    <h2>${title}</h2>
    <p>${description}</p>
    </div>
  </div>
`;
