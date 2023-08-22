class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
      }
}


class CarFactory {
    createCar(model) {
        switch(model) {
          case 'civic':
            return new Car('Honda Civic', 20000);
          case 'accord':  
            return new Car('Honda Accord', 25000);
          case 'odyssey':
            return new Car('Honda Odyssey', 30000);
          default:
            throw new Error('Unknown model');
        }
      }
}

const factory = new CarFactory();

const civic = factory.createCar('civic');
const accord = factory.createCar('accord');

console.log(civic.model); // Honda Civic 
console.log(accord.model); // Honda Accord


// The Factory pattern offers a way to create objects without specifying the exact class of object that will be created. In a Node.js context, this can simplify object creation, especially when dealing with asynchronous operations such as reading files or making API calls. By abstracting object creation, the Factory pattern enhances code readability and reusability.
