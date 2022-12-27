const { remoteDB } = require('./../../../config');

let store = require('./../../../store/mysql');
let cache = require('./../../../store/redis');

if (remoteDB === true) {
    store = require('./../../../store/remote-mysql');
    cache = require('./../../../store/remote-cache');
}

const controller = require('./controller');

module.exports = controller(store, cache);