const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('<center><h1>Hi Learnians.<br>Welcome to Learnia. </h1></center>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})