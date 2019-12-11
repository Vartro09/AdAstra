'use strict';

const express = require('express');
const router = express.Router();
const api_cliente = require('./recinto.api');

router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();
});


router.route('/registrar_recinto')
    .post(function (req, res) {
        api_cliente.registrar_recinto(req, res);
    });

router.route('/listar_recintos')
    .get(function (req, res) {
        api_cliente.listar_recintos(req, res);
    });

router.route('/buscar_recinto/:_id')
    .get(function (req, res) {
        api_cliente.buscar_recinto_id(req, res);
    }
    );

router.route('/modificar_recinto')
    .post(function (req, res) {
        api_cliente.modificar_recinto(req, res);
    }
    );

router.route('/eliminar_recinto')
    .post(function (req, res) {
        api_cliente.eliminar_recinto(req, res);
    }
    );

module.exports = router; 