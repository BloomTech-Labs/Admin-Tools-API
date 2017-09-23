const mongoose = require('mongoose');
const server = require('./server');
const secret = require('./secret');

const dbConfig = require('./config').db;

mongoose.Promise = global.Promise;
mongoose.connect(
  dbConfig.URI,
  { useMongoClient: true },
  (err) => {
    if (err) throw new Error(err);
    console.log('connected to mongo');
  }
);

/* eslint no-console: 0 */
const port = server.get('port');
server.listen(port, (err) => {
  if (err) throw new Error('Error running server', err);
  console.log(`Server up on ${port}`);
});
