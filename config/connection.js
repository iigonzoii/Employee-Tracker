const mysql = require('mysql2');
require('dotenv').config();

const myConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_tracker'
  });

  connection.connect((err) => {
  if (err) throw err;
  runSearch();
})
module.exports = myConnection