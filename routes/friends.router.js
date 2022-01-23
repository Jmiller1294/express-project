const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use(() => {
  console.log()
})

friendsRouter.get('/friends', friendsController.getFriends);
friendsRouter.post('/friends', friendsController.postFriends);

module.exports = friendsRouter;