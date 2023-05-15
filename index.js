const api = require('./routes/api')
const web = require('./routes/web')
const config = require('./config')
const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use('/api', api)
app.use('/', web)

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`)
})