const { Schema, model } = require('mongoose');

const ConversationSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  messages:  [Schema.Types.Mixed]
}, {collection: 'conversations'});

const Conversation = model('Conversation', ConversationSchema);
module.exports = Conversation;