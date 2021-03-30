
const mysql = require('mysql');
require('dotenv').config();


const myConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_tracker'
  });

  myConnection.connect((err) => {
  if (err) throw err;
  // runIt();
})
module.exports = myConnection