const { remoteDB } = require('./../../../config');

let store = require('./../../../store/mysql');

if (remoteDB) {
    store = require('./../../../store/remote-mysql');
}

const controller = require('./controller');

module.exports = controller(store);