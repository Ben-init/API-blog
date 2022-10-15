const db = {
    user: [
        { id: 0, name: 'juan'},
        { id: 1, name: 'pedro'},
        { id: 2, name: 'raul'},
        { id: 3, name: 'roberto'},
    ]
};

function list(table) {
    return db[table];
}

function get(table, id) {
    const collection = list(table);
    return collection.filter(item => item.id === id) || null;
}

function upsert(table, data) {
    db[table].push(data);
}

function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
}