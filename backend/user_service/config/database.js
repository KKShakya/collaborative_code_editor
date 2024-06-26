const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Connected to MySQL database');
});

module.exports = connection;
