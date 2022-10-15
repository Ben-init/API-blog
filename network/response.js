const success = (req, res, message, status = 200) => {
    res.status(status).send({
        error: false,
        body: message,
    });
};

const error = (req, res, message, status = 500) => {
    const errorMessage = message || 'Internal server error';

    res.status(status).send({
        error: errorMessage.message,
        body: errorMessage.stack,
    })
};

module.exports = { success, error };