const express = require('express');
const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello thereeee youuuuu')
})

app.use(express.json());

app.use('friends', friendsRouter);
app.use('messages', messagesRouter);
 
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})