// * expression
// any thin produce a value

3 + 4;
1991;
true && false && !false;
"tree";

//* statement
if (23 > 10) {
  // if statement
  const str = "23 is bigger";
  //==> the string is expression
  //==> the whole line itself is a statement
}
let a = 3; //=> statement
a; //=> expression

// in template literal you can add expression just in the ${}
