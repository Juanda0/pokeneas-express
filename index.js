const api = require('./routes/api')
const web = require('./routes/web')
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use('/api', api)
app.use('/', web)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})