const express = require('express');
const productsRouter = require('../products/productsRouter');
const suppliersRouter = require('../suppliers/suppliersRouter')

const server = express();

// global middleware
server.use(express.json());
server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);

// route handlers
server.get('/', (req, res) => {
	res.status(200).json({ api: 'server up' });
});

// manage clients
server.get('/clients', (req, res) => {});

module.exports = server;
