const db = require('../data/dbConfig.js');

module.exports = {
	insert,
	update,
	remove,
	getAll,
	findById
};

async function insert(pokemon) {
	const [ id ] = await db('pokemon').insert(pokemon, 'id');

	return db('pokemon').where({ id }).first();
}

function remove(id) {
	return null;
}
