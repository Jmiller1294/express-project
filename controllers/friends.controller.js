const model = require('../models/friends.model');

function getFriends(req, res) {
  res.send('<ul><li>Hello there.fsdfsdffsdfsdf hpe are ypu</li></ul>');
}

function postFriends(req, res) {
  console.log('...adding friends');
}

module.exports = {
  getFriends,
  postFriends
}