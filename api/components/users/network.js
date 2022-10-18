const express = require('express');
const router = express.Router();

const response = require('./../../../network/response');
const controller = require('./index');

router.get('/', async (req, res) => {
    try {
        const userList = await controller.list();
        response.success(req, res, userList);
    } catch (err) {
        response.error(req, res, err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await controller.get(id);
        response.success(req, res, user);
    } catch (err) {
        response.error(req, res, err);
    }
});

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newUser = await controller.add(data);
        response.success(req, res, newUser);
    } catch (err) {
        response.error(req, res, err);
    }
});

router.put('/', async (req, res) => {
    try {
        const data = req.body;
        const updatedUser = await controller.update(data);
        response.success(req, res, updatedUser);
    } catch (err) {
        response.error(req, res, err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await controller.remove(id);
        response.success(req, res, deletedUser);
    } catch (err) {
        response.error(req, res, err);
    }
});

module.exports = router;