class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // encapsulation does not exist already in JS but we will fake it 
    // its not really private its protected
    this._pin = pin;
    this._movements = [];
    this.locale() = navigator.language;
  }
  // public interface

  getMovements () {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }
  
  withdrawal(val) {
    this.deposit(-val);
  }

  _approveLoan(val) { 
    return true;
  }

  requestLoan (val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
    }
  }
  }


const acc1 = new Account("jonas", "EUR", "1234");

/*
first it is to prevent code from outside of a class to accidentally manipulate or data inside the class.

Now, the second reason is that when we expose only a small interface so a small API consisting only of a few public methods then we can change all the other internal methods with more confidence. Because in this case, we can be sure that external code does not rely on these private methods. And so therefore our code will not break when we do internal changes.
*/

// acc.pin = "5555";

acc1.deposit(400)
// now you can still use it but at least you and your team know you should not do that 
console.log(acc1._movements);

//--------------- private classes fields and methods 


// in stage 3 Not already in the language 


class Account {
  // 1)   public fields   [property that will be on all the instances]
  // NOTICE this properties won't be in the prototype but on the instances
  // [1] semi colon after [2] no const or let 
  locale = navigator.language;

  // 2)  private fields [really not accessible from the outside]
  #movements = []
  // cannot be accessed from outside the class 
  // there is no property on the object called #movements

  #pin; 
  // create it private and then set its value later 
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }
  // public interface [public methods]

  // we can still get the movements but we cannot manipulate it
  getMovements () {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  
  withdrawal(val) {
    this.deposit(-val);
  }
  requestLoan (val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
    }
  }

  // 4) private methods [really not accessible from the outside]
  // not already supported in the language
  #approveLoan(val) { 
    return true;
  }
}
acc1.deposit(250)
acc1.withdrawal(250)
acc1.requestLoan(1000)
console.log(acc1.getMovements());


// private fields 

// public methods