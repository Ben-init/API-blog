const { nanoid } = require('nanoid');

module.exports = function(injectedStore) {
    const store = injectedStore || require('./../../../store/dummy');
    const TABLE = 'post';
    
    function list() {
        return store.list(TABLE);
    }
    
    function get(id) {
        return store.get(TABLE, id);
    }
    
    async function add(data) {
        const newPost = {
            id: nanoid(),
            ...data,
        }

        return store.add(TABLE, newPost);
    }

    async function update(data, id) {
        const [ post ] = await get(id);
        const updatedPost = {
            ...post,
            ...data,
        }
        return store.update(TABLE, id, updatedPost);
    }

    function remove(id) {
        return store.remove(TABLE, id);
    }

    return {
        list,
        get,
        add,
        update,
        remove,
    };
}