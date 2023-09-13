const router = require('express').Router();
const pool = require('../config/dbConn')

router.get('/', async (req, res) => {
	try {
		const responseQuery = await pool.query(
			"SELECT * FROM data"
		);
		res.json(responseQuery);
	} catch (err) {
		console.error(err);
	}
})

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const responseQuery = await pool.query(
			"SELECT * FROM data WHERE id = $1",
			[id]
		);
		res.json(responseQuery);
	} catch (err) {
		console.error(err);
	}
})

router.post('/', async (req, res) => {
	try {
		const { value } = req.body;
		if (typeof value === 'string') {
			dataType = value.length > 20 ? 'text' : 'varchar';
		} else if (typeof value === 'number') {
			if (Number.isSafeInteger(value)) {
				if (value >= -32768 && value <= 32767) {
					dataType = 'smallint';
				} else if (value >= -2147483648 && value <= 2147483647) {
					dataType = 'integer';
				} else {
					dataType = 'bigint';
				}
			} else {
				dataType = 'decimal';
			}
		} else if (typeof value === 'boolean') {
			dataType = 'boolean';
		} else if (typeof value === 'object') {
			dataType = 'json';
		} else {
			dataType = 'text';
		}
		const responseQuery = await pool.query(
			`INSERT INTO data (data_${dataType}) VALUES($1) RETURNING *`,
			[value]
		);
		res.json(responseQuery.rows[0].id);
	} catch (err) {
		console.error(err);
	}
})
module.exports = router;