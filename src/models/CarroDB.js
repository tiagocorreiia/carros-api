const mysql = require('mysql')

// CarroDB Class
class CarroDB {
  // Connection
  static connect() {
    const connection = mysql.createConnection({
      host: 'localhost',
      port: '3307',
      user: 'root',
      password: 'root',
      database: 'livro',
    })
    connection.connect()
    return connection
  }

  // Lista Todos os Carros
  static getCarros(callback) {
    const connection = CarroDB.connect()
    const sql = 'select * from carro'
    const query = connection.query(sql, (error, results, fields) => {
      if (error) {
        callback(error, null)
        return
      }
      callback(null, results)
    })
    console.log(query.sql)
    connection.end()
  }

  // Busca Carro By Type
  static getCarrosByType(tipo, callback) {
    const connection = CarroDB.connect()
    const sql = `select id, nome, tipo from carro where tipo = "${tipo}"`
    const query = connection.query(sql, (error, results, fields) => {
      if (error) throw error
      callback(results)
    })
    console.log(query.sql)
    connection.end()
  }

  // Busca Carro By ID
  static getCarroById(id, callback) {
    const connection = CarroDB.connect()
    const sql = 'select * from carro where id = ?'
    const query = connection.query(sql, id, (error, results, fields) => {
      if (error) throw error
      if (results.length == 0) {
        console.log('Nenhum carro encontrado')
        return
      }
      const carro = results[0]
      callback(carro)
    })
    console.log(query.sql)
    connection.end()
  }

  // Cria Novo Carro
  static insertCarro(carro, callback) {
    const connection = CarroDB.connect()
    const sql = 'insert into carro set ?'
    const query = connection.query(sql, carro, (error, results, fields) => {
      if (error) throw error
      carro.id = results.insertId
      callback(carro)
    })
    console.log(query.sql)
    connection.end()
  }

  // Update Carro
  static updateCarro(carro, callback) {
    const connection = CarroDB.connect()
    const sql = 'update carro set ? where id = ?'
    const id = carro.id
    const query = connection.query(
      sql,
      [carro, id],
      (error, results, fields) => {
        if (error) throw error
        callback(carro)
      }
    )
    console.log(query.sql)
    connection.end()
  }

  // Deleta Carro
  static deleteCarro(carro, callback) {
    const connection = CarroDB.connect()
    const sql = 'delete from carro where id = ?'
    const id = carro.id
    const query = connection.query(sql, id, (error, results, fields) => {
      if (error) throw error
      callback(carro)
    })
    console.log(query.sql)
    connection.end()
  }

  // Deleta Carro By Id
  static deleteCarroById(id, callback) {
    const connection = CarroDB.connect()
    const sql = 'delete from carro where id = ?'
    const query = connection.query(sql, id, (error, results, fields) => {
      if (error) throw error
      callback(results.affectedRows)
    })
    console.log(query.sql)
    connection.end()
  }
}

module.exports = CarroDB
