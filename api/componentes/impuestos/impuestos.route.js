'use strict';

const express = require('express');
const router = express.Router();
const impuestosApi = require('./impuestos.api');

router.route('/registrar_impuesto')
    .post(
        function(req, res) {
            impuestosApi.registrar(req, res);
        }
    );

router.route('/listar_impuestos')
    .get(function(req, res) {
        impuestosApi.listar_todos(req, res);
    });


module.exports = router;