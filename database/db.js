
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "dbecommerce.cbxisoldayv6.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "4wGuGHJE0OgS.aF>heVNgSuP!D9L",
  database: "ecommerce",
});

connection.connect((err) => {
  if (err) console.log(err);
  else console.log("MySQL is connected...");
});

module.exports = connection;
