'use strict';

const mongoose = require('mongoose');

//Esquema del evento

let recinto_schema = new mongoose.Schema({
    imagen: { type: String, required: false },
    nombre: { type: String, required: false },
    encargado: { type: String, required: false },
    telefono: { type: String, required: false },
    hora_apertura: { type: String, required: false },
    hora_cierre: { type: String, required: false },
    capacidad: { type: Number, required: false },
    estado: { type: String, required: false },
    ubicacion: { type: String, required: true },
    provincia: { type: String, required: true },
    canton: { type: String, required: true },
    distrito: { type: String, required: true },
});

module.exports = mongoose.model('Recinto', recinto_schema);