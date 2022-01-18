const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Helloooooo')
})

app.get('/messages', (req, res) => {
  res.send('<ul><li>Hellooo</li></ul>')
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})