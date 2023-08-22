class Database {
  constructor() {
    this.conection = null;
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  connect() {
    // connect to database
    this.connection = 'Connected'; 
  }
}


const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // true

db1.connect(); 

console.log(db1.connection); // 'Connected'
console.log(db2.connection); // 'Connected'


// The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. In Node.js, where modules can be cached and shared across the application, using the Singleton pattern can help manage resources effectively. For instance, a database connection pool can be implemented as a singleton to prevent resource wastage.
