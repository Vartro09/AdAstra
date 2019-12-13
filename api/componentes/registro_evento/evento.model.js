'use strict';

const mongoose = require('mongoose');

//Esquema del evento

let evento_schema = new mongoose.Schema({
    imagen: { type: String, required: false },
    max_entradas: { type: String, required: false },
    precio: { type: String, required: false },
    nombre: { type: String, required: false },
    recinto: { type: String, required: false },
    fecha_inicio: { type: String, required: false },
    fecha_finalizacion: { type: String, required: false },
    tipo_evento: { type: String, required: false },
    encargado: { type: String, required: false },
    ubicacion: { type: String, required: true },
    provincia: { type: String, required: true },
    canton: { type: String, required: true },
    distrito: { type: String, required: true },
});

module.exports = mongoose.model('Evento', evento_schema);