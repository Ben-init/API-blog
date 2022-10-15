const express = require('express');

const userRouter = require('./components/users/network');
const { api } = require('../config.js');
const app = express();

app.use('/api/user', userRouter)
app.listen(api.port);

console.log('port: ', api.port)