var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "asistencia",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

//   var sql = "SELECT * FROM logs";

//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: ", result);
//   });
});

module.exports = con;
