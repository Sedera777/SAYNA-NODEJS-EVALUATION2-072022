'use strict'
const { pool } = require('./mysql')
class Avis {
    static create(firstname, lastname, avis, note, category_id_category, query, callback) {
        pool.query(query, [firstname, lastname, avis, note, category_id_category], function(err, result) {
            if (err) throw err
            callback(result)
        })
    }
    static all(query) {
        pool.query(query, function(err, rows) {
            if (err) throw err
            return rows
        })
    }
}

module.exports = { Avis }