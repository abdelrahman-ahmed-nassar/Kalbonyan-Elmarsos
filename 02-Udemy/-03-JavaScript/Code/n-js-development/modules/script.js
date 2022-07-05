// NOTICE importing and exporting are life connection not just making copies

// NOTICE the importing script runs after the exporting script
//------- 1) named imports

// importing modules
// import "./shoppingCart.js";

// importing function  [named export]
// import { addToCart, addToCart, totalPrice as price } from "./shoppingCart.js";

// import * as shoppingCart from "./shoppingCart.js";
// will create object with the name we defined in the import statement
// shoppingCart.addToCart("product");

// console.log("Exporting module");
// addToCart("apple");

//--------------- default imports

// we name it as we want to use it

// import add from "./shoppingCart.js";

/****************************************/
//---------- top-level await

// we can use await out an async function
// that is just true in modules
// NOTICE this block the execution of the entire module now

//***  practical example [return value from async function]

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

// return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// lastPost.then((last) => console.log(last));

// new way of doing it
// const lastPost2 = await getLastPost();

// NOTICE
//if one module imports a module which has a top-level await, then the importing module will wait for the imported module to finish the blocking code.

//------------------------ module pattern

// wrap every thing in a function
// const shoppingCart2 = (function () {
// private variables
// const cart = [];
// const cost = 454;
// const shippingCost = 12;
// const totalQuantity = 32;

// private functions
// const addToCart = function (product) {
// cart.push(product);
// };

// const orderStock = function () {
// console.log(`${totalQuantity} items in stock`);
// };

// making data public by return an object with this data

// public API
// return {
// addToCart,
// orderStock,
// cart,
// };
// })();

// shoppingCart.addToCart("product");

//---------- common js modules

// AMD module

// Common JS module system

// 1 module = 1 file
// export something

// export.addToCart = function (product) {
//   cart.push(product);
// }

// won't work

// import

// const { addToCart } = require("./shoppingCart.js");

// won't work

//----------- using the lodash
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    { product: "bread", quantity: 2 },
    { product: "pizza", quantity: 2 },
    { product: "bread", quantity: 2 },
  ],
  user: { loggedIn: true },
};

// old way
const stateClone = Object.assign({}, state);
state.user.loggedIn = false;

console.log(stateClone);
// will be false

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = true;

console.log(stateDeepClone);
// will still false
