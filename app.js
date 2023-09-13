const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/', require('./routes/root'));
app.use('/check', require('./routes/post'));

app.all('*', (req, res) => {
	res.status(404)
	res.send('404 Not Found')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})