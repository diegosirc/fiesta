const db = require('../config/db');

// Controlador para obtener todos los usuarios
const getUsers = (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Controlador para crear un usuario
const createUser = (req, res) => {
    const { nombre, apellido, email, password, rol_id } = req.body;
    const sql = 'INSERT INTO usuarios (nombre, apellido, email, password, rol_id) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, apellido, email, password, rol_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Usuario creado', id: result.insertId });
    });
};

module.exports = { getUsers, createUser }; // Exportar correctamente como objeto
