const db = {
    user: [
        { id: 0, name: 'juan'},
        { id: 1, name: 'pedro'},
        { id: 2, name: 'raul'},
        { id: 3, name: 'roberto'},
    ]
};

async function list(table) {
    return db[table];
}

async function get(table, id) {
    const collection = await list(table);
    return collection.filter(item => item.id == id) || null;
}

async function upsert(table, data) {
    db[table].push(data);
}

async function remove(table, id) {
    delete db[table][id];
}

module.exports = {
    list,
    get,
    upsert,
    remove
}