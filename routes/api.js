const express = require('express')
const controller = require('../controller/pokeController')
const router = express.Router()

router.get('/', function(req, res) {
    controller.api(res)
})

module.exports = router;