const express = require('express');

const { mysqlService } = require('./../config');
const router = require('./network');
const errors = require('./../network/error');

const app = express();

app.use(express.json());

app.use('/', router);

app.use(errors);

app.listen(mysqlService.port, console.log('port:', mysqlService.port));