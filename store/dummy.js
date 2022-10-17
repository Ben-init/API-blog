const db = {
    user: [
        { id: 0, name: 'juan'},
        { id: 1, name: 'pedro'},
        { id: 2, name: 'raul'},
        { id: 3, name: 'roberto'},
    ]
};

async function list(table) {
    return db[table] || [];
}

async function get(table, id) {
    const collection = await list(table);
    return collection.filter(item => item.id == id) || null;
}

async function add(table, data) {
    if (!db[table]) {
        db[table] = [];
    }
    db[table].push(data);
}

async function update(table, id, data) {
    db[table][id] = data;
}

async function query(table, target) {
    const collection =  await list(table);
    const key = Object.keys(target)[0];

    return collection.filter(i => i[key] === target[key])[0] || null;

}

async function remove(table, id) {
    delete db[table][id];
}

module.exports = {
    list,
    get,
    add,
    update,
    query,
    remove
}