

module.exports = function(injectedStore) {
    const store = injectedStore || require('./../../../store/dummy');
    const TABLE = 'user';
    
    function list() {
        return store.list(TABLE);
    }
    
    function get(id) {
        return store.get(TABLE, id);
    }
    
    function add(data) {
        return store.upsert(TABLE, data)
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