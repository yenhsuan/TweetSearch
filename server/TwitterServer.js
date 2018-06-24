const express = require('express')
const path = require('path')

const config = require('./config/server-config.js')
const api = require('./routes/restapi.js')
const home = require('./routes/home.js')
const app = express()

const server = require('http').Server(app)
app.use(express.static(path.join(__dirname, '../dist')))
app.use('/', home)
app.use('/api/v1', api)
app.use((req, res, next) => {
  res.redirect('/')
})

server.listen(config.port, () => {
  console.log(`[*] Server is running on port ${config.port}`)
})
server.on('error', (err) => {
  throw err
})
