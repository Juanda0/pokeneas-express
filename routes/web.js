const pokeneas = require('../pokeneas')
const express = require('express')
const os = require('os')
let ejs = require('ejs');
const router = express.Router()

router.get('/', function(req, res) {
    const number = Math.floor(Math.random() * 7)
    res.render('pokeview', {
        data: pokeneas.data[number],
        id_contenedor: os.hostname()
    })
})

module.exports = router;