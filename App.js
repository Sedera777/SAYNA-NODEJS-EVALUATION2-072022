'use strict'
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 7000
const router = require('./routes/routes')

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))

// Define Routes
app.use(router)
app.listen(port, () => { console.log(`Server started on port ${port}`) })