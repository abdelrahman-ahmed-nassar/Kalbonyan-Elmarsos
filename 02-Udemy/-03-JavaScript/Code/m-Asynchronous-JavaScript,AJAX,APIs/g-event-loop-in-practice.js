console.log("test start");
// appear first

setTimeout(() => console.log("0 timer"), 0);
// appear fifth  and will be delayed (not in 0 second)

Promise.resolve("resolved promise 1").then((res) => console.log(res));
// appear third

Promise.resolve("resolved promise 2").then((res) => {
  for (let i = 0; i < 100000; i++) {}
  console.log(res);
});
// appear fourth

console.log("test end");
// appear second
