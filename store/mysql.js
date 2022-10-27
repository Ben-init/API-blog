const mysql = require('mysql');
const { promisify } = require('util');

const { mysql : sqlConfig } = require('./../config');

const dbConfig = {
    host: sqlConfig.host,
    user: sqlConfig.user,
    password: sqlConfig.pass,
    database: sqlConfig.database,
};

let connection;

function getConnection() {
    connection = mysql.createConnection(dbConfig);

    connection.connect((error) => {
        if (error) {
            console.error('[database error]', error);
            setTimeout(getConnection, 2000);
        } else {
            console.log('DB CONNECTED');
        }
    });

    connection.on('error', (error) => {
        console.error('[database error]', error);
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            getConnection();
        } else {
            throw error;
        }
    })
}

getConnection();

connection.query = promisify(connection.query);

async function list(table) {
    const dataList = await connection.query(`SELECT * FROM ${table}`);
    return dataList;
}

async function get(table, id) {
    const data = await connection.query(`SELECT * FROM ${table} WHERE id = ?`, [id]);
    return data;
}

async function add(table, data) {
    const newData = await connection.query(`INSERT INTO ${table} SET ?`, data);
    return newData;
}

async function update(table, id,data ) {
    const updatedData = await connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, id]);
    return updatedData;
}

async function query(table, query, join) {
    let joinQuery = '';
    
    if (join) {
        console.log('deadefae');
        const key = Object.keys(join)[0];
        const val = join[key];
        joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
    }
    const response = await connection.query(`SELECT * FROM ${table} ${joinQuery} WHERE ${table}.?`, [query]);
    return response;
}

module.exports = {
    list,
    get,
    add,
    update,
    query
}