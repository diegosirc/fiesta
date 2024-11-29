const express = require('express');
const { getOrders, createOrder } = require('../controllers/orderController');
const router = express.Router();

// Definir rutas
router.get('/', getOrders);
router.post('/', createOrder);

module.exports = router; // Exportar correctamente el router
