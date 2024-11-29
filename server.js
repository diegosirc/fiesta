const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Importar rutas
const userRoutes = require('./routes/userRoutes');
console.log('userRoutes:', userRoutes);
const productRoutes = require('./routes/productRoutes');
console.log('productRoutes:', productRoutes);
const orderRoutes = require('./routes/orderRoutes');
console.log('orderRoutes:', orderRoutes);

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Usar las rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Escuchar en el puerto definido
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
