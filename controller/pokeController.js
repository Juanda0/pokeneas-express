const pokeneas = require('../pokeneas')
const os = require('os')
let ejs = require('ejs');

function handleApiRequest(res) {
    const number = Math.floor(Math.random() * pokeneas.data.length)
    let response = { ...pokeneas.data[number] }
    response['id_contenedor'] = os.hostname()
    delete response['frase']
    res.send(response)
}

function handleWebRequest(res) {
    const number = Math.floor(Math.random() * pokeneas.data.length)
    res.render('pokeview', {
        data: pokeneas.data[number],
        id_contenedor: os.hostname()
    })
}

module.exports = {
    api:handleApiRequest,
    web:handleWebRequest,
}