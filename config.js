require('dotenv').config();

const config = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    mysql : {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        pass: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB,
    },
};

module.exports = config;