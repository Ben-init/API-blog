require('dotenv').config();

const config = {
    remoteDB: process.env.REMOTEDB || false,
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
    mysqlService: {
        port: process.env.MYSQL_SERVICE_PORT || 3001,
        host: process.env.MYSQL_SERVICE_HOST || 'localhost',
    },
    cacheService: {
        port: process.env.CACHE_SERVICE_PORT || 3003,
        host: process.env.CACHE_SERVICE_HOST || 'localhost',
    },
    redisConfig: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        user: process.env.REDIS_USER,
        pass: process.env.REDIS_PASS,
    },
    post: {
        port: 3002,
    }
};

module.exports = config;