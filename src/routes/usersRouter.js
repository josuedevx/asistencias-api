const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/usuarios", userController.create);
router.get("/usuarios/:id", userController.findOne);
router.put("/usuarios/:id", userController.update);
router.delete("/usuarios/:id", userController.deleteOne);

module.exports = router;
