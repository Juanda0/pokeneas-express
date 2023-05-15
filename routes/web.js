const express = require('express')
const controller = require('../controller/pokeController')
const router = express.Router()

router.get('/', function(req, res) {
    controller.web(res)
})

module.exports = router;