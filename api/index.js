'use strict';

const express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose');


let db = mongoose.connection,
  dburl = 'mongodb+srv://admin:adastra123@adastra-t5vdh.mongodb.net/test?retryWrites=true&w=majority',
  port = 4000;


let server = app.listen(port, _server());

mongoose.connect(dburl, { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'Error de conexión: '));

db.once('open', function () {
  console.log('Base de datos conectada correctamente');
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const evento = require('./componentes/registro_evento/evento.route');

const recinto = require('./componentes/registro_recinto/recinto.route');

const usuario = require('./componentes/registro_usuario/usuario.route');

//REQUERIDO PARA REGISTRO DE IMPUESTOS
const impuestos = require('./components/impuestos/impuestos.route');

app.use('/api', evento);
app.use('/api', recinto);
app.use('/api', usuario);

//REQUERIDO PARA REGISTRO DE IMPUESTOS
app.use('/api', impuestos);

module.exports = app;

function _server() {
  console.log('Back-end corriendo en el puerto ' + port);
};