const rest1 = {
  name: "capri",
  numGuests: 20,
};

const rest2 = {
  name: "capri",
  owner: "ali",
};

// now we wnt to add property to each object don't have it
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1.numGuests);
// 20
console.log(rest2.numGuests);
// 10

//******* the OR assignment operator

rest1.numGuests ||= 10; // just the same as
//rest1.numGuests = rest1.numGuests || 10;
rest1.numGuests ||= 10;
//rest2.numGuests = rest2.numGuests || 10;

//********  solve the zero problem
//********   nullish assignment operator

rest1.numGuests ??= 10;
rest1.numGuests = rest1.numGuests ?? 10;

//******* And assignment operator  for replacing

rest2.owner = rest1.owner && "ail";
rest2.owner &&= "ali";
