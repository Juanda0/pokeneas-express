const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')
const os = require('os')
const api = require('./routes/api')

app.use('/api', api)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})