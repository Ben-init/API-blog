const express = require('express');
const router = express.Router();

const response = require('./../network/response');
const store = require('./../store/mysql');

router.post('/query/:table', async (req, res, next) => {
    try {
        const { table } = req.params;
        const { query, join } = req.body;
        const data = await store.query(table, query, join);
        response.success(req, res, data);
    } catch (error) {
        next(error);
    }
});

router.get('/:table', async (req, res, next) => {
    try {
        const { table } = req.params;
        const list = await store.list(table);
        response.success(req, res, list);
    } catch (error) {
        next(error);
    }
});

router.get('/:table/:id', async (req, res, next) => {
    try {
        const { table, id } = req.params;
        const data = await store.get(table, id);
        response.success(req, res, data);
    } catch (error) {
        next(error);
    }
});

router.post('/:table', async (req, res, next) => {
    try {
        const { table } = req.params;
        const data = req.body;
        const newData = await store.add(table, data);
        response.success(req, res, newData);
    } catch (error) {
        next(error);
    }
});

router.put('/:table/:id', async (req, res, next) => {
    try {
        const { table, id } = req.params;
        const data = req.body
        const updatedData = await store.update(table, id, data);
        response.success(req, res, updatedData);
    } catch (error) {
        next(error);
    }
});

module.exports = router;

