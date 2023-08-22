// Decorators dynamically add new functionality to objects without affecting other instances. This is ideal for extending core modules in Node.

class Car {
    constructor() {
      this.price = 10000;
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  class CarOptions {
    constructor(car) {
      this.car = car;
    }
  
    addGPS() {
      this.car.price += 500;
    }
    
    addRims() {
      this.car.price += 300; 
    }
  }
  
  const basicCar = new Car();
  
  console.log(basicCar.getPrice()); // 10000
  
  const carWithOptions = new CarOptions(basicCar);
  
  carWithOptions.addGPS();
  carWithOptions.addRims();
  
  console.log(carWithOptions.car.getPrice()); // 10800