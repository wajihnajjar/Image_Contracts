var mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  database: process.env.MYSQL_DATABASE || "etafakna",
  charset: "cp1256",
  port : process.env.DB_PORT || 3306
});

connection.connect((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});
module.exports = connection;





