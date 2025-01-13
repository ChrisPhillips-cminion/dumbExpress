const express = require('express')
const sleep = require('sleep')
const app = express()
const port = 3000
const payload = require('./9B.json')



app.get('/', (req, res) => {
  sleep.msleep(500);
  // res.set('Cache-Control', 'max-age=300, must-revalidate')
  res.send(payload)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
