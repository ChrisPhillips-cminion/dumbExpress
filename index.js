const express = require('express')
const sleep = require('sleep')
const app = express()
const port = 3000
const payload = require('./256KB.json')


const nocache = require('nocache');



app.get('/', (req, res) => {
  res.set('Cache-Control', 'max-age=300, must-revalidate')
  sleep.sleep(1)
  res.send(payload)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
