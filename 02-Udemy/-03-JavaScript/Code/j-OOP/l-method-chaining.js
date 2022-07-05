class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale() = navigator.language;
  }
  // public interface
  deposit(val) {
    this.movements.push(val);
    // make the property chain-able
    return this
  }
  
  withdrawal(val) {
    this.deposit(-val);
    // make the property chain-able
    return this;
  }
}

const acc1 = new Account("jonas", "EUR", "1234");

// chaining  [calling a method returns undefined]

// so we should use the return value of the method 
acc1.deposit(300).deposit(500).withdrawal(100)