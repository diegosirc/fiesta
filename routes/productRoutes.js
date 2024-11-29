const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');
const router = express.Router();

// Definir rutas
router.get('/', getProducts);
router.post('/', createProduct);

module.exports = router; // Exportar correctamente el router
