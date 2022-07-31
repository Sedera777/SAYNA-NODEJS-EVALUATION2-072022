'use strict'
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const session = require('express-session')
const { Avis } = require('../models/note')
const { pool, SelectAllElements } = require('../models/mysql')

const { querybackend, insertquery, topavis, queryfrontend, querymarketing, queryuiux } = require('../models/query')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use(session({
    secret: 'sayna',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}))

router.use(require('../middlewares/flash'))

router.get('/', async(req, res) => {
    const top_avis = await SelectAllElements(topavis[0])
    const top_avis1 = await SelectAllElements(topavis[1])
    const top_avis2 = await SelectAllElements(topavis[2])
    const top_avis3 = await SelectAllElements(topavis[3])
    const top_avis4 = await SelectAllElements(topavis[4])
    const top_avis5 = await SelectAllElements(topavis[5])
    res.render('index', { top: top_avis, top1: top_avis1, top2: top_avis2, top3: top_avis3, top4: top_avis4, top5: top_avis5 })
})

router.get('/backend', async(req, res) => {
    const avis_backend = await SelectAllElements(querybackend[0])
    const avis_backend1 = await SelectAllElements(querybackend[1])
    const avis_backend2 = await SelectAllElements(querybackend[2])
    const avis_backend3 = await SelectAllElements(querybackend[3])
    res.render('backend', { avis: avis_backend, avis1: avis_backend1, avis2: avis_backend2, avis3: avis_backend3 })
})

router.get('/frontend', async(req, res) => {
    const avis_frontend = await SelectAllElements(queryfrontend[0])
    const avis_frontend1 = await SelectAllElements(queryfrontend[1])
    const avis_frontend2 = await SelectAllElements(queryfrontend[2])
    const avis_frontend3 = await SelectAllElements(queryfrontend[3])
    res.render('frontend', { avis: avis_frontend, avis1: avis_frontend1, avis2: avis_frontend2, avis3: avis_frontend3 })
})

router.get('/d-marketing', async(req, res) => {
    const avis_marketing = await SelectAllElements(querymarketing[0])
    const avis_marketing1 = await SelectAllElements(querymarketing[1])
    const avis_marketing2 = await SelectAllElements(querymarketing[2])
    const avis_marketing3 = await SelectAllElements(querymarketing[3])
    res.render('marketing', { avis: avis_marketing, avis1: avis_marketing1, avis2: avis_marketing2, avis3: avis_marketing3 })

})

router.get('/ui-ux', async(req, res) => {
    const avis_uiux = await SelectAllElements(queryuiux[0])
    const avis_uiux1 = await SelectAllElements(queryuiux[1])
    const avis_muiux2 = await SelectAllElements(queryuiux[2])
    const avis_muiux3 = await SelectAllElements(queryuiux[3])
    res.render('uxui', { avis: avis_uiux, avis1: avis_uiux1, avis2: avis_muiux2, avis3: avis_muiux3 })
})

// router.get('/signup', (req, res) => {
//     res.sendFile(path.resolve('views/signup.html'));
// })

router.get('/contact', (req, res) => {
    res.render('contact');
})

router.post('/contact', (req, res) => {
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