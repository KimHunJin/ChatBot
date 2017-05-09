var mysql = require('mysql');

var dbConfig = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'mosquito',
  database: 'kakao'
};

var connection = mysql.createConnection(dbConfig);
connection.connect(function(err) {
  if(err) {
	console.error('failed connect', err);
	return;
  }
  console.log('success connect');
});

module.exports = connection;
