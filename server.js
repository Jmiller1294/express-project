const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello thereeee youuuuu')
})

app.get('/friends', (req, res) => {
  res.send('<ul><li>Hello there.fsdfsdffsdfsdf hpe are ypu</li></ul>')
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})