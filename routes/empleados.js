const express = require('express');
const router = express.Router();
const empleadoController = require("../controllers/empleadoController");

router.get("/", empleadoController.empleadosGetAll);
router.post("/", empleadoController.empleadosCreatePost);

module.exports = router;