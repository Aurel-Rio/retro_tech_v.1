const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'riozacki',
  password: '',
  database: 'retrotech'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

module.exports = connection;