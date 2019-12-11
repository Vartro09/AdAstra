const http = require('http');

const port = 3000;

const serveStatic = require('serve-static');
const connect = require('connect');

const nodemon = require('nodemon');


connect().use(serveStatic(__dirname)).listen(port, () => {
  console.log(`La aplicación esta levantada dentro del puerto ${port} ingrese usando localhost:3000/public`);
  nodemon({
    script: 'api/index.js',
    ext: 'js'
  });
});