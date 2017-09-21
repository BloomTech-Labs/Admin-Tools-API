const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/routes');
const server = express();

server.set('port', (process.env.PORT || 5000));

server.use(bodyParser.json());
server.use(cors());

routes(server);

module.exports = server;
