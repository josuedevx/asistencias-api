require("dotenv").config();
const express = require("express");
const router = express.Router();
const path = require("path");
const cors = require("cors");

router.get("/qrcode/:usuarioId", (req, res) => {
    res.send("qr code");
});

module.exports = router;