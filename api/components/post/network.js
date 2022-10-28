const express = require('express');
const router = express.Router();

const response = require('./../../../network/response');
const controller = require('./index');
const secure = require('./../users/secure');

router.get('/', async (req, res, next) => {
    try {
        const list = await controller.list();
        response.success(req, res, list);
    } catch (err) {
        next(err);
    }
});


router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await controller.get(id);
        response.success(req, res, post);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const data = req.body;
        const newPost = await controller.add(data);
        response.success(req, res, newPost);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', secure.update, async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedPost = await controller.update(data, id);
        response.success(req, res, updatedPost);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPost = await controller.remove(id);
        response.success(req, res, deletedPost);
    } catch (err) {
        next(err);
    }
});

module.exports = router;