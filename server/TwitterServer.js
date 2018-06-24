const express = require('express')
const cors = require('cors')
const path = require('path')

const api = require('./routes/restapi.js')
const home = require('./routes/home.js')

const app = express()
app.use(cors())

const server = require('http').Server(app)
app.use(express.static(path.join(__dirname, '../dist')))
app.use('/', home)
app.use('/api/v1', api)
app.use((req, res, next) => {
  res.redirect('/')
  // res.sendFile('index.html', {root: path.join(__dirname, '../dist')})
})

server.listen(3000)
server.on('error', (err) => {
  throw err
})
