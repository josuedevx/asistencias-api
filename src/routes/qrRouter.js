const express = require("express");
const router = express.Router();
const qrController = require("../controllers/qrController");

router.get("/qrcode/:usuarioId", qrController.create);

module.exports = router;