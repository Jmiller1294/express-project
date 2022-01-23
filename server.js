const express = require('express');
const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controller');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello thereeee youuuuu')
})

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);

app.get('/friends', friendsController.getFriends);
app.post('/friends', friendsController.postFriends);
 
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})