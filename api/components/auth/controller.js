const bcrypt = require('bcrypt');
const auth = require('../../../auth');

module.exports = function(injectedStore) {
    const store = injectedStore || require('./../../../store/dummy');
    const TABLE = 'auth';
    
    async function login(username, pass) {
        const data = await store.query(TABLE, { username: username });
        const verifiedPass = await bcrypt.compare(pass, data.password);
 
        if (!verifiedPass) {
            throw new Error('Invalid data');
        } 
        return auth.sign({
            sub: data.id,
            username: data.username,
        });
    }

    async function add(data) {
        const authData = {
            ...data
        }
        authData.password = await bcrypt.hash(data.password, 8);

        return store.add(TABLE, authData);
    }

    return {
        login,
        add,
    };
}