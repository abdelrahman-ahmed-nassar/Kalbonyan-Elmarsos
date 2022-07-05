for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights  repetition ${rep}`);
}

// doing the same thing with while loop

let rep = 1;
while (rep <= 10) {
  console.log(`lifting weights  repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

console.log(``);
