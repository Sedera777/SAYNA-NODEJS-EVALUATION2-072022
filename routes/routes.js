'use strict'
const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/backend', (req, res) => {
    res.sendFile(path.resolve('views/backend.html'));
})

router.get('/frontend', (req, res) => {
    res.sendFile(path.resolve('views/frontend.html'));
})

router.get('/d-marketing', (req, res) => {
    res.sendFile(path.resolve('views/marketing.html'));
})

router.get('/ui-ux', (req, res) => {
    res.sendFile(path.resolve('views/uxui.html'));
})

router.get('/signup', (req, res) => {
    res.sendFile(path.resolve('views/signup.html'));
})

router.get('/contact', (req, res) => {
    res.sendFile(path.resolve('views/contact.html'));
})
module.exports = router