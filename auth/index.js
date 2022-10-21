const jwt = require('jsonwebtoken');
const { jwt: jwtConfig } = require('../config');
const error = require('./../utils/error');

/**
 * 
 * @param {object} data user data
 * @returns {string} token
 */
function sign(data) {
    return jwt.sign(data, jwtConfig.secret);
}

function getToken(authorization) {
    if (!authorization) {
        throw error('token not found', 400);
    } else if (!authorization.includes('Bearer ')) {
        throw error('invalid token', 498);
    }
    const token = authorization.replace('Bearer ', '');
    
    return token;
}

function verify(token) {
    return jwt.verify(token, jwtConfig.secret)
}

function decodeHeader(req) {
    const auth = req.headers.authorization || '';
    const token = getToken(auth);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

const check = {
    /**
     * check whether it is own or not
     * @param {*} req : request
     * @param {*} owner : user id
     */
    own: (req, owner) => {
        const decoded = decodeHeader(req);
        
        if (decoded.sub !== owner) {
            throw error('permission denied', 401);
        }
    }
};

module.exports = {
    sign,
    check,
}