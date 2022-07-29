'use strict'
const query = ["SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='BackEnd' AND id_category=category_id_category LIMIT 1",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='BackEnd' AND id_category=category_id_category LIMIT 1 OFFSET 1",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='BackEnd' AND id_category=category_id_category LIMIT 1 OFFSET 2",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='BackEnd' AND id_category=category_id_category LIMIT 1 OFFSET 3"
]
const insertquery = "INSERT INTO posts (firstname, lastname, avis, note, category_id_category) VALUES (?, ?, ?, ?, ?)"

const topavis = ["SELECT firstname, lastname, avis, note FROM posts, category WHERE id_category=category_id_category ORDER BY note DESC LIMIT 1 OFFSET 0"]

module.exports = { query, insertquery, topavis }