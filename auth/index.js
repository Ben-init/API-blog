const jwt = require('jsonwebtoken');
const { jwt: jwtConfig } = require('../config');

function sign(data) {
    return jwt.sign(data, jwtConfig.secret);
}

function getToken(authorization) {
    if (!authorization) {
        throw new Error('token not found');
    } else if (!authorization.includes('Bearer ')) {
        throw new Error('invalid token');
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

module.exports = {
    sign,
}