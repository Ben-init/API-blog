const express = require('express');
const router = express.Router();

const response = require('./../../../network/response');
const controller = require('./index');

router.get('/', (req, res) => {
    const list = controller.list();
    response.success(req, res, list);
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    const list = controller.get(id);
    response.success(req, res, list);
});

module.exports = router;