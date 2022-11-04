const fetch = require('node-fetch');

const error = require('./../utils/error');

function createRemoteDB(host, port) {
    const URL = `http://${host}:${port}`;

    function list(table) {
        return request(table);
    }

    function get(table, id) {
        const route = `${table}/${id}`;
        return request(route);
    }

    function add(table, data) {
        return request(table, { method: 'POST' }, data);
    }

    function update(table, id, data) {
        const route = `${table}/${id}`;
        return request(route, { method: 'PUT' }, data);
    }

    function query(table, query, join) {
        const route = `query/${table}`;
        return request(route, { method: 'POST' }, {query, join});
    }

    async function request(route, methods, data) {
            const endpoint = `${URL}/${route}`;
            const body = data ? JSON.stringify(data) : null;
            const options = {
                body: body,
                headers: {'Content-type': 'application/json'},
                ...methods,
            };
            const response = await fetch(endpoint, options);
            const json = await response.json();
            
            if (json.error) {
                throw error(json.body);
            };
            
            return json.body;
    }


    return {
        list,
        get,
        add,
        update,
        query,
    }
}

module.exports = createRemoteDB;