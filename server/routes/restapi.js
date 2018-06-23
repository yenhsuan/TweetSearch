const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const Twit = require('twit')
const twitterConfig = require('../config/twitter-config') // import your own app token/secret config file
const twitter = new Twit(twitterConfig)

router.post('/search', jsonParser, (req, res) => {
  const query = req.body.query
  const num = req.body.count

  console.log(`[*] Recevied search request...`)
  console.log(`     query: ${query}`)
  console.log(`     count: ${num}`)

  twitter.get('search/tweets', { q: query, count: num }, (err, data, response) => {
    if (err) {
      console.err(err)
      const ret = {
        'error': true,
        'message': err
      }
      res.json(ret)
      return
    }
    res.json(data)
    console.log(`[*] Search results sent...\n`)
  })
})

module.exports = router
