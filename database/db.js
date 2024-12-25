
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "dbecommerce.cbxisoldayv6.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "v.UK-W|OXzleMa)iG?1!!?j?WAdT",
  database: "ecommerce",
});

connection.connect((err) => {
  if (err) console.log(err);
  else console.log("MySQL is connected...");
});

module.exports = connection;
