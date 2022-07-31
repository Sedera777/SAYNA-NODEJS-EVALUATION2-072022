'use strict'
const mysql = require('mysql')
const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})


const SelectAllElements = (query) => {
    return new Promise((resolve, reject) => {
        pool.query(query, (err, result) => {
            if (err) {
                reject(err)
                return

            }
            resolve(result)
            return

        })
    })
}

module.exports = { pool, SelectAllElements }