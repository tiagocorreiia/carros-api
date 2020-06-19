const CarroDB = require('../models/CarroDB')
const assert = require('assert')

describe('CarroDB', () => {
  describe('#getCarros()', () => {
    it('Teste da busca de carros', async () => {
      let carros = await CarroDB.getCarros()
      assert.ok(carros.length > 0)
    })
  })

  describe('#insertCarro()', () => {
    it('Teste para criar novo carro', async () => {
      let carro = {
        nome: 'Carro Teste',
        descricao: 'Descrição de teste',
        url_foto: '',
        url_video: '',
        latitude: '',
        longitude: '',
        tipo: 'classicos',
      }
      let c = await CarroDB.insertCarro(carro)
      let id = c.id
      assert.ok(id > 0)
    })
  })
})
