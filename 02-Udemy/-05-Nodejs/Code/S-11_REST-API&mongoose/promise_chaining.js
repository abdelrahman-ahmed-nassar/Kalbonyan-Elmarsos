const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 200);
  });
};

add(1, 3)
  .then((sum) => {
    console.log(sum);
    return add(sum, 1);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((error) => {
    console.log(error);
  });


