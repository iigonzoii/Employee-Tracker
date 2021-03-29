const mysql = require('mysql2');
require('dotenv').config();

const myConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_tracker'
  });

  module.exports = myConnection

  // !do i put the const connection thing in here? instead of in my index.js since its part of the connection, i think it goes here.
  /* connection.connect((err) => {
  if (err) throw err;
  runSearch();
});*/