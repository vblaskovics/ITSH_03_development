const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  if (req.err) {
    console.log(req.err)
  }
  res.send('My message!')
})

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`)
})