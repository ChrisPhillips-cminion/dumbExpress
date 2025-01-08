const express = require('express')
const app = express()
const port = 3000
const payload = require('./256KB.json')
app.get('/', (req, res) => {
  res.send(payload)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
