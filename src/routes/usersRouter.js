require("dotenv").config();
const express = require("express");
const con = require("../utils/db_connection");
const router = express.Router();

router.post("/usuarios", (req, res) => {
  var sql =
    "INSERT INTO `users`(`id`, `nombre`, `apellido`, `email`, `matricula`, `password`, `rol`, `turno`, `estado`, `created_at`, `updated_at`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]','[value-8]','[value-9]','[value-10]','[value-11]')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: ", result);
  });
  
});

router.get("/usuarios/:id", (req, res) => {
  res.send("GET");
});

router.put("/usuarios/:id", (req, res) => {
  res.send("PUT");
});

router.delete("/usuarios/:id", (req, res) => {
  res.send("DELETE");
});

module.exports = router;
