const response = require('./response');

function errors(err, req, res, next) {
    console.error('[error]', err);
    const status = err.statusCode || 500;
    response.error(req, res, err, status);
}

module.exports = errors;