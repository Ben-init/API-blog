const auth = require('../../../auth');

function update(req, res, next) {
    const owner = req.params.id;
    auth.check.own(req, owner);
    next();
}

function follow(req, res, next) {
    auth.check.logged(req);
    next();
}

module.exports = {
    update,
    follow
}