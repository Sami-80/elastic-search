const express = require('express')
const app = express()
const port =   3000

app.get('/search', (req, res) => {
  console.log(req.ip)
  res.send('this is in under development...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})