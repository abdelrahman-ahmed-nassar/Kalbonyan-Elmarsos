// exporting module

console.log("Importing module");

// this will be private to this file
const shippingCost = 12;
const cart = [];

// to use them we need to export them

//---------------- 1) named exports

export const addToCart = function (product) {
  cart.push(product);
};

// now we should also import this function

// NOTICE exports need to happen in the top level code

const totalPrice = 237;
const totalQuantity = 237;

export { totalPrice, totalQuantity as tq };

//---------------- 2) default exports
// for exporting a value
// one per file
export default function () {
  return "hello";
}
// didn't use name

//------------- top level await

// blocking code

await fetch("https://jsonplaceholder.typicode.com/posts");
console.log("fetching data");

// will wait for the await because it actually block the execution of the entire module
