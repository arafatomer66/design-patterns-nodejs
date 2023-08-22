const fetchData = new Promise((resolve, reject) => {
    // async operation
    const data = getDataFromDatabase();
    
    if (data) {
      resolve(data); 
    } else {  
      reject('Error fetching data');
    }
  });
  
  fetchData
    .then(data => {
      // handle successful data
    })
    .catch(err => {
      // handle error  
    });


    // Promises are a pattern for asynchronous programming in Node.js. They represent the eventual result of an async operation