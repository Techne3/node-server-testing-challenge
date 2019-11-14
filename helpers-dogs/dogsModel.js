const db =require('../data/dbConfig')


module.exports = {
    find,
    add,
};

function find(id) {
	if (id) {
        return db('dogs')
        .where({ id })
        .first();
	} else {
		return db('dogs');
	}
}


function add(item){
    return db('dogs')
    .insert(item, "id")
    .then(ids => {
        const [id] =ids;
        return find(id)
    })
}