const express = require('express');
const userRouter = require('../api/components/users/network');
const authRouter = require('../api/components/auth/network');
const postRouter = require('../api/components/post/network');

const Routes = (app) => {
    const router = express.Router();
    app.use('/api', router);
    router.use('/user', userRouter);
    router.use('/auth', authRouter);
    router.use('/post', postRouter);
};

module.exports = Routes;