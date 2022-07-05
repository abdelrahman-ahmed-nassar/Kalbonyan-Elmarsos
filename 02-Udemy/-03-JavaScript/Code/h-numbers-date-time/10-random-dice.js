const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1
//0....(max - min)
//0 + min ..... (max -min + min)
// min....max

console.log(randomInt(10, 20));
