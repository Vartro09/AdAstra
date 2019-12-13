'use strict';

const express = require('express');
const router = express.Router();
const api_cliente = require('./usuario.api');

router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();
});


router.route('/registrar_usuario')
    .post(function (req, res) {
        api_cliente.registrar_usuario(req, res);
    });

router.route('/listar_usuarios')
    .get(function (req, res) {
        api_cliente.listar_usuarios(req, res);
    });

router.route('/listar_usuario/:_id')
    .get(function (req, res) {
        api_cliente.listar_usuario_id(req, res);
    }
    );


//REQUERIDO PARA INICIO DE SESION
router.route('/validar_credenciales')
    .post(
        function(req, res){
            api_cliente.validar_credenciales(req, res);
        }
    );

module.exports = router; 