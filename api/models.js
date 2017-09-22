const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  login: String,
  avatar_url: String,
});

const PrSchema = new Schema({
  url: String,
  state: String,
  name: String,
  createdAt: Date,
  id: Number,
  user: UserSchema,
});

const PullRequest = mongoose.model('Pullrequest', PrSchema);

module.exports = {
  PullRequest,
};
