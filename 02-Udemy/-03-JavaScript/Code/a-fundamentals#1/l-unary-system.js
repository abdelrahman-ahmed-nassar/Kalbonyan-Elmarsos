// ******************  unary system ***************

/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

console.log(+100);
console.log(+"100"); // return a number => 100
console.log(+"-100"); // return a number => -100
console.log(+"ali");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);
// return the negative of the number 
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"ali");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));

// ***************      Challenge 1    *************

a = 10; // i don't use let because i've declare them before
b = "20";
c = 80;

console.log(++a + +b++ + +c++ - +a++);
//          11  +  20   + 80   - 11
// now a = 12  b = "21" c = 81
console.log(++a + -b + +c++ - -a++ + +a);
//           13 - 21 +  81  +  13  + 14
// now a = 14  b ="21" c=82
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
//          81  + 21 + 13  * 21 - 22 * 13 + 12 - 1

// *********************** Challenge 2 *****************

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(++e * ++g + -d + ++f); // 173
// 21 * 2 + 100 + 31
