const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');
const router = express.Router();

// Definir rutas
router.get('/', getUsers); // Ruta para obtener todos los usuarios
router.post('/', createUser); // Ruta para crear un usuario

module.exports = router; // Exportar correctamente el router
