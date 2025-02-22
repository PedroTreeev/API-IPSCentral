const sql = require('mssql')

const config = {
  server: 'DESKTOP-3CA1G0S',
  user: 'admin',
  password: 'Contrasena',
  database: 'Apricot',
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true
  }
}
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}