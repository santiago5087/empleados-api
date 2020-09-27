const express = require('express');
const router = express.Router();
const empleadoController = require("../controllers/empleadoController");

// Se separan las rutas de los controladores para facilitar el escalamiento de la API
router.get("/", empleadoController.empleadosGetAll);
router.get("/:id", empleadoController.empleadosGetOne);
router.post("/", empleadoController.empleadosCreatePost);

module.exports = router;