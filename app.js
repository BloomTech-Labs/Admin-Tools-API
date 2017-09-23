const mongoose = require('mongoose');
const server = require('./server');
const secret = require('./secret');

mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb://${secret.user}:${secret.secret}@ds147884.mlab.com:47884/pr-testing`,
  { useMongoClient: true },
  (err) => {
    if (err) throw new Error(err);
    console.log('connected to mongo');
  }
);

const port = server.get('port');
server.listen(port, (err) => {
  if(err) throw new Error('Error running server', err);
  console.log(`Server up on ${port}`);
});
