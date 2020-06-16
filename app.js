const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas
app.use('/api/carros', require('./routes/carros'))

// Server
const server = app.listen(3000, 'localhost', () => {
	const host = server.address().address
	const port = server.address().port
	console.log(`Servidor iniciado em http://${host}:${port}`)
})
