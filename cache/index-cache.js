const express = require('express');

const { cacheService } = require('../config');
const router = require('./network');
const errors = require('../network/error');

const app = express();

app.use(express.json());

app.use('/', router);

app.use(errors);

app.listen(cacheService.port, console.log('port:', cacheService.port));