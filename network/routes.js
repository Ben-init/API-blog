const express = require('express');
const userRouter = require('../api/components/users/network');

const Routes = (app) => {
    const router = express.Router();
    app.use('/api', router);
    router.use('/user', userRouter);
};

module.exports = Routes;