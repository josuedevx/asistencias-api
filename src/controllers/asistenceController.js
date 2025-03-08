const logging = require("../config/logging");
const con = require("../utils/db_connection");

const create = (req, res) => {
  logging.info("Login attempt");
  res.status(200).json({ message: "asistence in successfully" });
};

const findAll = (req, res) => {};

const findOne = (req, res) => {};

const findByUserId = (req, res) => {};

const update = (req, res) => {};

const deleteOne = (req, res) => {};

module.exports = {
  create,
  findAll,
  findOne,
  findByUserId,
  update,
  deleteOne,
};
