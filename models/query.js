'use strict'
const insertquery = "INSERT INTO posts (firstname, lastname, avis, note, category_id_category) VALUES (?, ?, ?, ?, ?)"

const querybackend = ["SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='BackEnd' AND id_category=category_id_category LIMIT 1",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='BackEnd' AND id_category=category_id_category LIMIT 1 OFFSET 1",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='BackEnd' AND id_category=category_id_category LIMIT 1 OFFSET 2",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='BackEnd' AND id_category=category_id_category LIMIT 1 OFFSET 3"
]

const queryfrontend = ["SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='FrontEnd' AND id_category=category_id_category LIMIT 1",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='FrontEnd' AND id_category=category_id_category LIMIT 1 OFFSET 1",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='FrontEnd' AND id_category=category_id_category LIMIT 1 OFFSET 3",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='FrontEnd' AND id_category=category_id_category LIMIT 1 OFFSET 2"
]

const querymarketing = ["SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='Marketing' AND id_category=category_id_category LIMIT 1",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='Marketing' AND id_category=category_id_category LIMIT 1 OFFSET 1",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='Marketing' AND id_category=category_id_category LIMIT 1 OFFSET 2",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='Marketing' AND id_category=category_id_category LIMIT 1 OFFSET 3"
]

const queryuiux = ["SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='UX / UI' AND id_category=category_id_category LIMIT 1",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='UX / UI' AND id_category=category_id_category LIMIT 1 OFFSET 1",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='UX / UI' AND id_category=category_id_category LIMIT 1 OFFSET 2",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE type_formation='UX / UI' AND id_category=category_id_category LIMIT 1 OFFSET 3"
]

const topavis = ["SELECT firstname, lastname, avis, note FROM posts, category WHERE id_category=category_id_category ORDER BY note DESC LIMIT 1 OFFSET 0",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE id_category=category_id_category ORDER BY note DESC LIMIT 1 OFFSET 1",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE id_category=category_id_category ORDER BY note DESC LIMIT 1 OFFSET 2",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE id_category=category_id_category ORDER BY note DESC LIMIT 1 OFFSET 3",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE id_category=category_id_category ORDER BY note DESC LIMIT 1 OFFSET 4",
    "SELECT firstname, lastname, avis, note FROM posts, category WHERE id_category=category_id_category ORDER BY note DESC LIMIT 1 OFFSET 5"
]

module.exports = { insertquery, querybackend, queryfrontend, querymarketing, queryuiux, topavis }