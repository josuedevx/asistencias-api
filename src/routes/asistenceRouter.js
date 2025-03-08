const express = require("express");
const router = express.Router();
const asistenceController = require("../controllers/asistenceController");

router.post("/asistencias", asistenceController.create);
router.get("/asistencias", asistenceController.findAll);
router.get("/asistencias/:id", asistenceController.findOne);
router.get("/asistencias/usuario/:id", asistenceController.findByUserId);
router.put("/asistencias/:id", asistenceController.update);
router.delete("/asistencias/:id", asistenceController.deleteOne);

module.exports = router;
