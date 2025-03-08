const logging = require("../config/logging");
const con = require("../utils/db_connection");

const login = (req, res) => {
    res.status(200).json({ message: "login in successfully" });
};
const logout = (req, res) => {};

module.exports = {
  login,
  logout,
};
