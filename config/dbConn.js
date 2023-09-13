const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'dataControl',
	post: 5432,
	password: '123'
})
module.exports = pool;













// const { Client } = require('pg')

// const connectDB = async () => {
// 	try {
// 		const client = new Client({
// 			user: 'postgres',
// 			host: 'localhost',
// 			database: 'dataControl',
// 			password: '123',
// 			port: 5432,
// 		})
// 		client.connect(function (err) {
// 			if (err) throw err;
// 			console.log("Connected!");
// 		});
// 	} catch (err) {
// 		console.error(err.message);
// 		process.exit(1);
// 	}
// }

// module.exports = connectDB;