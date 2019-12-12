'use strict';

const mongoose = require('mongoose');

let impuestoSchema = new mongoose.Schema({

    nombreImpuesto: { type: String, unique: true, required: true },
    porcentaje: { type: Number, required: true }
});


module.exports = mongoose.model('Impuesto', impuestoSchema);