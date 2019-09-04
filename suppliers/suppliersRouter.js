// implement a get to /suppliers response with a massage
//implement a Get to /suppliers/name that returns the name sent

const express = require('express');
const router = express.Router();

// a router can have middleware that applies on to the router
router.use(express.json());

// this router handles urls that begin with /products

// GET to /products/
router.get('/', (req, res) => {
	res.send('we are getting /Suppliers/');
});

router.get('/name', (req, res) => {
  const { name } = req.params;
  console.log(req.params.name)
	res.send(`get to /products/${name}`);
});

module.exports = router;
