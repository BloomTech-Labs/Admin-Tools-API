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
  console.log('found it!')
  res.json({'Success': 'You made it home!'});
};

const getAllPrs = (req, res) => {
  PullRequest.find({}, (err, pullRequests) => {
    if (err) return SendStatusError(err, res);
    res.json(pullRequests);
  });
};

const postPr = (req, res, done) => {
  const PR = req.body.pull_request;
  const user = { login, avatar_url } = PR.user;
  const { url, state, title, createdAt, id } = PR;
  const newPr = { user: { login, avatar_url }, url, state, title, createdAt, id };
  if (PR) {
    PullRequest.find({id: id}, (err, objectFound) => {
      if (err) {
        // if error is found handle it.
        return SendStatusError(err, res, done);
      }
      if (objectFound.length === 0) {
        handleUserOnSave(newPr, res, done);
      } else {
        const id = objectFound[0]._id;
        handleUpdatePullRequest(id, newPr, res, done);
      }
    });
  }
};

module.exports = {
  homeRoute,
  postPr,
  getAllPrs,
};
