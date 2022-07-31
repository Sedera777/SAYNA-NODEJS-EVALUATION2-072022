'use strict'
const { pool } = require('./mysql')
class Avis {
    static create(firstname, lastname, avis, note, category_id_category, query, callback) {
        pool.query(query, [firstname, lastname, avis, note, category_id_category], function(err, result) {
            if (err) throw err
            callback(result)
        })
    }
}

module.exports = { Avis }