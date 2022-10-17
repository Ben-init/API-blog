const express = require('express');
const router = express.Router();

const response = require('./../../../network/response');
const controller = require('./index');

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const login = await controller.login(username, password);
        response.success(req, res, login);
    } catch (err) {
        response.error(req, res, err);
    }
});

module.exports = router;