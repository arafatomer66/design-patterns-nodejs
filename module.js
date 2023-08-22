// The module pattern is one of the most basic but fundamental patterns in Node.js. It allows you to organize your code into separate files or modules that encapsulate specific functionality.

// counter.js

let count = 0;

const increment = () => {
  count++;
}

const decrement = () => {
  count--;
}

const get = () => {
  return count; 
}

module.exports = {
  increment,
  decrement,
  get  
};

// app.js

const counter = require('./counter');

counter.increment();
counter.increment();

console.log(counter.get()); // 2

counter.decrement();

console.log(counter.get()); // 1