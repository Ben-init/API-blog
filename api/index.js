const express = require('express');

const { api } = require('../config.js');
const Routes = require('../network/routes');
const errors = require('./../network/error');

const app = express();

app.use(express.json());

Routes(app);

app.use(errors);

app.listen(api.port);

console.log('port: ', api.port)