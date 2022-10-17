const auth = require('../../../auth');

module.exports = function(injectedStore) {
    const store = injectedStore || require('./../../../store/dummy');
    const TABLE = 'auth';
    
    async function login(username, password) {
        const data = await store.query(TABLE, { username: username });

        if (data.password !== password) {
            throw new Error('Invalid data');
        } 
        return auth.sign({
            sub: data.id,
            username: data.username,
        });
    }

    function add(data) {
        const authData = {
            ...data
        }

        return store.add(TABLE, authData);
    }

    return {
        login,
        add,
    };
}