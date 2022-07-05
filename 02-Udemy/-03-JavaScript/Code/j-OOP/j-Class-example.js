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
  }
  
  withdrawal(val) {
    this.deposit(-val);
  }
}

const acc1 = new Account("jonas", "EUR", "1234");

// acc1.movements.push(200);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdrawal(140);