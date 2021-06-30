var express = require('express')
var router = express.Router()
const User = require('../models/User');
const Conversation = require('../models/Conversation');


router.get('/me/conversations', async (req, res, next) => {
  try {
    let userConvs = await User.findById(req.user._id).populate("conversations").lean();
    userConvs = userConvs.conversations;
    // Now we need to fetch participants names
    for (let conv of userConvs) {
      const participants = await User.find(
        {_id: {$in: conv.participants}}, "name");
      conv.participantNames = participants.map(({ name }) => name);
      delete conv.participants;
    };
    res.json(userConvs);
  } catch (e) {
    next(e);
  }
});


module.exports = router;
