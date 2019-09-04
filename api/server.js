const express = require('express');
const productsRouter = require('../products/productsRouter');
const suppliersRouter = require('../suppliers/suppliersRouter');

const server = express();

// global middleware
server.use(express.json());
// server.use(uppercase) // using custom middleware gloabally

// use the middleware locally
server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter); // you can list more than one middleware

// route handlers
server.get('/', (req, res) => {
	res.status(200).json({ api: 'server up' });
});

// manage clients
server.get('/clients', (req, res) => {});

module.exports = server;
