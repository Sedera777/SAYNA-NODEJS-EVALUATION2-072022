'use strict'
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const session = require('express-session')
const { pool, SelectAllElements } = require('../models/mysql')
const { Avis } = require('../models/note')
const { query, insertquery, topavis } = require('../models/query')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(session({
    secret: 'sayna',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

router.use(require('../middlewares/flash'))

router.get('/', async(req, res) => {
    const top_avis = await SelectAllElements(topavis[0])
    res.render('index', { top: top_avis })
})

router.get('/backend', async(req, res) => {
    const avis_backend = await SelectAllElements(query[0])
    const avis_backend1 = await SelectAllElements(query[1])
    const avis_backend2 = await SelectAllElements(query[2])
    const avis_backend3 = await SelectAllElements(query[3])

    res.render('backend', { avis: avis_backend, avis1: avis_backend1, avis2: avis_backend2, avis3: avis_backend3 })

})

router.get('/frontend', (req, res) => {
    res.render('frontend')

})

router.get('/d-marketing', (req, res) => {
    res.render('marketing')

})

router.get('/ui-ux', (req, res) => {
    res.render('uxui')

})

// router.get('/signup', (req, res) => {
//     res.sendFile(path.resolve('views/signup.html'));
// })

router.get('/contact', (req, res) => {
    res.render('contact');
})

router.post('/contact', async(req, res) => {
    if (req.body.lastname === '' || req.body.avis === '' || req.body.note === '') {
        req.flash('error', 'Vous n\'avez pas rempli tous les champs! 😢')
        res.redirect('/contact')
    } else {
        Avis.create(req.body.firstname, req.body.lastname, req.body.avis, req.body.note, req.body.formation, insertquery, () => {
            req.flash('success', 'Merci pour votre avis!!!')
            res.redirect('/contact')
        })
    }
})

module.exports = router