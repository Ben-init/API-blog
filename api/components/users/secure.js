const auth = require('../../../auth');

function update(req, res, next) {
    const owner = req.params.id;
    auth.check.own(req, owner);
    next();
}

module.exports = {
    update,
}