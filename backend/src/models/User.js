const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String, // XXX
  conversations: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }],
}, {collection: 'users'});


UserSchema.methods.isValidPassword = function(password) {
  return this.password === password; // XXX
}


const User = model('User', UserSchema);
module.exports = User;