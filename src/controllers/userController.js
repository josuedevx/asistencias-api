const logging = require("../config/logging");
const con = require("../utils/db_connection");

const create = (req, res) => {
  logging.info("Login attempt");
  //   var sql = "";

  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Result: ", result);
  //   });

  res.status(200).json({ message: "Logged in successfully" });
};

const findOne = (req, res) => {};

const update = (req, res) => {};

const deleteOne = (req, res) => {};

module.exports = {
  create,
  findOne,
  update,
  deleteOne,
};
