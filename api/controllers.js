const homeRoute = (req, res) => {
  console.log('found it!')
  res.json({'Success': 'You made it home!'});
};

const postPr = (req, res) => {
  console.log(req.body.pull-request);
  res.send(req.body);
};

module.exports = {
  homeRoute,
  postPr,
};
