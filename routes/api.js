const pokeneas = require('../pokeneas')
const express = require('express')
const os = require('os')
const router = express.Router()

router.get('/', function(req, res) {
    const number = Math.floor(Math.random() * 7)
    console.log(pokeneas.data)
    let response = { ...pokeneas.data[number] }
    response['id_contenedor'] = os.hostname()
    delete response['frase']
    res.send(response)
})

module.exports = router;