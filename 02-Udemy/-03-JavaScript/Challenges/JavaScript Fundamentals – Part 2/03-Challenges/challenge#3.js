

const mark = {
  firstName: "Mark", 
  lastName: "Miller",
  mass: 78, 
  height: 1.69,

  
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2; 
    return this.BMI
  }
}

const john = {
  firstName: "John",
  lastName: "Smith", 
  mass: 92, 
  height: 1.95, 

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2; 
    return this.bmi
  }
}

if (john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${mark.lastName} (${mark.calcBMI()})`);
} else {
  console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${john.lastName} (${john.calcBMI()})`);
}