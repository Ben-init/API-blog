const { nanoid } = require('nanoid');
const auth = require('../auth');

module.exports = function(injectedStore) {
    const store = injectedStore || require('./../../../store/dummy');
    const auth = require('../auth');
    const TABLE = 'user';
    
    function list() {
        return store.list(TABLE);
    }
    
    function get(id) {
        return store.get(TABLE, id);
    }
    
    async function add(data) {
        const newUser = {
            id: nanoid(),
            ...data,
        }

        await auth.add({
            id: newUser.id,
            username: newUser.username,
            password: newUser.password,
        });

        delete newUser.password;

        return store.add(TABLE, newUser);
    }

    function remove(id) {
        return store.remove(TABLE, id);
    }

    return {
        list,
        get,
        add,
        remove
    };
}