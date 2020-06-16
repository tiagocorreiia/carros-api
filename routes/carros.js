const express = require('express')
const router = express.Router()
const CarroDB = require('../model/CarroDB')

// Busca Todos os Carros
router.get('/', (req, res) => {
	CarroDB.getCarros((carros) => {
		res.json(carros)
	})
})

// Busca um Carro Por ID
router.get('/:id(\\d+)', (req, res) => {
	const id = req.params.id
	CarroDB.getCarroById(id, (carro) => {
		res.json(carro)
	})
})

// Busca Carros Por Tipo
router.get('/:tipo', (req, res) => {
	const tipo = req.params.tipo
	CarroDB.getCarrosByType(tipo, (carros) => {
		res.json(carros)
	})
})

// Cria Novo Carro
router.post('/', (req, res) => {
	const carro = req.body
	CarroDB.insertCarro(carro, (carro) => {
		res.json(carro)
	})
})

// Atualiza Carro
router.put('/', (req, res) => {
	const carro = req.body
	CarroDB.updateCarro(carro, (carro) => {
		res.json({ msg: 'Carro atualizado com sucesso' })
	})
})

// Deleta Um Carro
router.delete('/:id(\\d+)', (req, res) => {
	const id = req.params.id
	console.log(`Deletar carro: ${id}`)
	CarroDB.deleteCarroById(id, (affectedRows) => {
		res.json({ msg: 'Carro deletado com sucesso' })
	})
})

module.exports = router
