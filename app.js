const mongoose = require('mongoose');
const server = require('./server');
const secret = require('./secret');

mongoose.connect(
  `mongodb://ryan:${secret.secret}@ds147034.mlab.com:47034/ls-admin-tools`,
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
