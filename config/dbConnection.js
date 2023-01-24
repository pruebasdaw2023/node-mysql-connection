const mysql = require('mysql2')
const { HOST, USER, PASSWORD, DATABASE } = require('./config')

module.exports = () => {
    return mysql.createConnection({
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: DATABASE
    })
}