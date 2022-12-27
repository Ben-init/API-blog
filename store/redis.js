const redis = require('redis');
const { redisConfig } = require('../config');

const urlRedis = `redis://${redisConfig.user}:${redisConfig.pass}@${redisConfig.host}:${redisConfig.port}`;

const client = redis.createClient({
    url: urlRedis,
});


async function connectCache() {
    await client.connect();
}

connectCache();

client.on('ready', () => {
    console.log('cache conectado');
})

async function list(table) {
    const keys = await client.KEYS(table + '*');
    const target = keys.length !== 0 ? keys : table;
    const response = await client.mGet(target);
    const list = `[${response}]`
    return JSON.parse(list);
}

async function get(table, id) {
    const key = table + '_' + id;
    const response = await client.get(key);
    return JSON.parse(response);
}

async function add(table, data) {
    const key = table + '_' + data.id;
    await client.set(key, JSON.stringify(data));
    return true;
}

async function update(table, id, data) {
    const key = table + '_' + id;
    await client.set(key, JSON.stringify(data));
    return true;
}

module.exports = {
    update,
    list,
    get,
    add,
}