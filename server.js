let mysql = require('mysql2');

let con = mysql.createConnection({
  host: "172.17.0.2",
  user: "root",
  password: "nig",
  port:3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});