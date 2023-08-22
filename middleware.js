// Node.js’s middleware architecture is widely used for handling requests and responses in web applications. The Middleware pattern involves a chain of functions that process a request sequentially. Each function can modify the request or response before passing it to the next function in the chain. This pattern enhances modularity and allows developers to plug in various functionalities without tightly coupling them.

const express = require('express');
const app = express();

const logger = (req, res, next) => {
  console.log('Logged');
  next();
}

const authenticate = (req, res, next) => {
  // authenticate user 
  next(); 
}

app.use(logger); 
app.use(authenticate);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);