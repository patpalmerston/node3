// implement a get to /suppliers response with a massage
//implement a Get to /suppliers/name that returns the name sent

const express = require('express');
const router = express.Router();

// a router can have middleware that applies on to the router
router.use(express.json());

function uppercase(req, res, next) {
	let name = req.params.name;

	if (name) {
		req.name = name.toUpperCase();
	}
	// res.send(`the name is: ${name}`)
	next();
}

// this router handles urls that begin with /products

// GET to /products/
router.get('/', (req, res) => {
	res.send('we are getting /Suppliers/');
});

router.get('/:name', uppercase, (req, res) => {
	res.send(`get to /products/${req.name}`);
});

module.exports = router;
