const add = (num1, num2, callBack) => {
  setTimeout(() => {
    callBack(num1 + num2)
  }, 1000 )
}


add(1, 4, (sum) => {
  console.log(sum);
})