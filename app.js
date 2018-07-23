const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan');


const server = http.createServer(app);

// configuración del Servidor
app.set('port', 3000);

app.use(morgan('dev')); //Middleware del registrador de solicitudes HTTP para node.js
app.use(express.static(__dirname + '/public')); 
//Marco web minimalista rápido, sin fusión, para nodo .

server.listen(app.get('port'), function () {
  console.log('servidor en puerto 3000');
});

// este es la logica de los sockets
require('./sockets')(server);