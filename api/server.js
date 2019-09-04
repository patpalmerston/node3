const express = require('express');

const server = express();

server.get('/', (req, res) => {
	res.status(200).json({ api: 'server up' });
});

// manage products
server.get('/products', (req, res) => {});
// manage clients
server.get('/clients', (req, res) => {});
// manage orders
server.get('/orders', (req, res) => {});
// manage suppliers
server.get('/suppliers', (req, res) => {});

module.exports = server;
