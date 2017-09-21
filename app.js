const server = require('./server');

server.listen(5050, (err) => {
  if(err) throw new Error('Error running server', err);
  console.log('Server listening on 5050');
});
