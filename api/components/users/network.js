const express = require('express');
const router = express.Router();

const response = require('./../../../network/response');
const controller = require('./index');

router.get('/', async (req, res) => {
    try {
        const list = await controller.list();
        response.success(req, res, list);
    } catch (err) {
        response.error(req, res, err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const list = await controller.get(id);
        response.success(req, res, list);
    } catch (err) {
        response.error(req, res, err);
    }
});

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const list = await controller.add(data);
        response.success(req, res, list);
    } catch (err) {
        response.error(req, res, err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const list = await controller.remove(id);
        response.success(req, res, list);
    } catch (err) {
        response.error(req, res, err);
    }
});

module.exports = router;