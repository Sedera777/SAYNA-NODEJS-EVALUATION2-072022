'use strict'
const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(session({
    secret: 'sayna',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

router.use(require('../middlewares/flash'))
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
    res.render('contact');
})

router.post('/contact', (req, res) => {
    if (req.body.lastname === '' || req.body.firstname === '' || req.body.avis === '' || req.body.note === '') {
        req.flash('error', 'Vous n\'avez pas rempli tous les champs! 😢')
        res.redirect('/contact')
    } else {
        req.flash('success', 'Merci pour votre avis!!!')
        res.redirect('/contact')
    }

})
module.exports = router