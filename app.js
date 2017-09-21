const server = require('./server');
server.set('port', (process.env.PORT || 5000));

server.listen(server.get('port'), (err) => {
  if(err) throw new Error('Error running server', err);
  console.log('Server listening on 5050');
});
