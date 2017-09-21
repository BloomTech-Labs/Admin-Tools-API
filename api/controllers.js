const PullRequest = require('./models').PullRequest;
// HELPERS:
const SendStatusError = (error, res) => {
  res.status(422);
  res.json(error);
  return;
};

// CONTROLLERS: 
const homeRoute = (req, res) => {
  console.log('found it!')
  res.json({'Success': 'You made it home!'});
};

const getAllPrs = (req, res) => {
  PullRequest.find({}, (err, pullRequests) => {
    if (err) return SendStatusError(err, res);
    res.json(pullRequests);
  });
};

const postPr = (req, res) => {
  const PR = req.body.pull_request;
  const user = { login, avatar_url } = PR.user;
  const { url, state, title, createdAt } = PR;
  const newPr = { user: { login, avatar_url }, url, state, title, createdAt };
  const newPullRequest = new PullRequest(newPr);
  newPullRequest.save((err, savedPR) => {
    if (err) return SendStatusError(err, res);
    res.json(savedPR);
  });
}

module.exports = {
  homeRoute,
  postPr,
  getAllPrs,
};
