const mysql = require('mysql');

// Database connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: 'quyen123' // Your MySQL password
});

module.exports = connection;
