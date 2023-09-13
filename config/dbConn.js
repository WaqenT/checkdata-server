const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'datacontrol_user',
	host: 'dpg-ck0vucndorps7389f7e0-a',
	database: 'datacontrol',
	post: 5432,
	password: 'FDzY7PX2qEw8HsdlvRW5bb13TiV8YcQn'
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