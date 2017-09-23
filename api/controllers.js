const PullRequest = require('./models').PullRequest;
// HELPERS:
const SendStatusError = (error, res, done) => {
  res.status(422);
  res.json(error);
  if(done) {
    return done();
  } else {
    return;
  }
};

const handleUserOnSave = (newPr, res, done) => {
  const newPullRequest = new PullRequest(newPr);
  newPullRequest.save((err, savedPR) => {
    if (err) return SendStatusError(err, res);
    res.json(savedPR);
    done();
  });
};

const handleUpdatePullRequest = (id, item, res, done) => {
  console.log(item[0]);
  PullRequest.findByIdAndUpdate(
      id, 
      item, 
      (error, updatedPr) => {
        console.log("ERROR: ", error);
        console.log("updatedPr: ", updatedPr);
        if (error) {
          return SendStatusError(error, res, done);
        }
        res.json(updatedPr);
  });
};
// CONTROLLERS: 
const homeRoute = (req, res) => {
  console.log('found it!');
  res.json({'Success': 'You made it home!'});
};

const getAllPrs = (req, res) => {
  PullRequest.find({}, (err, pullRequests) => {
    if (err) return SendStatusError(err, res);
    res.json(pullRequests);
  });
};

const clearClosedPrs = (req, res) => {
  PullRequest.remove({ state: 'closed'}, err => err ? SendStatusError(err, res) : res.status(200).send({ message: 'All closed PRs have been deleted.' }));
}

const postPr = (req, res, done) => {
  const PR = req.body.pull_request;
  if (PR) {
    const user = { login, avatar_url } = PR.user;
    const { url, state, title, createdAt, id } = PR;
    const newPr = { user: { login, avatar_url }, url, state, title, createdAt, id };
    PullRequest.find({id: id}, (err, objectFound) => {
      if (err) {
        // if error is found handle it.
        return SendStatusError(err, res, done);
      }
      if (objectFound.length === 0) {
        // if PR doesn't exists save it.
        handleUserOnSave(newPr, res, done);
      } else {
        // if PR exists we're going to just update it.
        const id = objectFound[0]._id;
        handleUpdatePullRequest(id, newPr, res, done);
      }
    });
  } else {
    res.status(200);
    res.json({ 'Message: ': 'must be a test' });
  }
};

module.exports = {
  homeRoute,
  postPr,
  clearClosedPrs,
  getAllPrs,
};
