'use strict';

const express = require('express');
const router = express.Router();
const api_cliente = require('./evento.api');

router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();
});


router.route('/registrar_evento')
    .post(function (req, res) {
        api_cliente.registrar_evento(req, res);
    });

router.route('/listar_eventos')
    .get(function (req, res) {
        api_cliente.listar_eventos(req, res);
    });

router.route('/buscar_evento/:_id')
    .get(function (req, res) {
        api_cliente.buscar_evento_id(req, res);
    }
    );

router.route('/modificar_evento')
    .post(function (req, res) {
        api_cliente.modificar_evento(req, res);
    }
    );

router.route('/eliminar_evento')
    .post(function (req, res) {
        api_cliente.eliminar_evento(req, res);
    }
    );

module.exports = router; 