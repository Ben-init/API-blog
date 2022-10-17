/**
 * Sends a response with the given message and status.           
 * @param {Request} req - the request object           
 * @param {Response} res - the response object           
 * @param {string} message - the message to send           
 * @param {number} [status=200] - the status code to send           
 * @returns None           
 */
const success = (req, res, message, status = 200) => {
    res.status(status).send({
        error: false,
        body: message,
    });
};

/**
 * Sends an error response to the client.           
 * @param {Request} req - The request object.           
 * @param {Response} res - The response object.           
 * @param {string} message - The error message.           
 * @param {number} [status=500] - The status code to send.           
 * @returns None           
 */
const error = (req, res, message, status = 500) => {
    const errorMessage = message || 'Internal server error';

    res.status(status).send({
        error: errorMessage.message,
        body: errorMessage.stack,
    })
};

module.exports = { success, error };