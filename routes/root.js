const router = require('express').Router();

router.get('/', (req, res) => { 
	res.send('Hello Root!')
})

module.exports = router;