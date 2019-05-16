const express = require('express');

const server = express();

const pokemon = require('../pokemon/pokemonModel.js');

server.use(express.json());

server.get('/', async (req, res) => {
	res.status(200).json({ api: 'up' });
});

server.get('/pokemon', async (req, res) => {
	const rows = await pokemon.getAll();

	res.status(200).json(rows);
});

module.exports = server;
