const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  login: String,
  avatarUrl: String,
});

const PrSchema = new Schema({
  url: String,
  state: String,
  title: String,
  createdAt: Date,
  user: UserSchema,
});

const PullRequest = mongoose.model('Pullrequest', PrSchema);

module.exports = {
  PullRequest,
};
