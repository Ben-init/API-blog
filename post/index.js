const express = require('express');

const { post } = require('./../config.js');
const errors = require('./../network/error');
const postRoutes = require('./components/post/network');

const app = express();

app.use(express.json());

app.use('/api/post', postRoutes);

app.use(errors);

app.listen(post.port);

console.log('port: ', post.port)