const server = require('./server');

const port = server.get('port');
server.listen(port, (err) => {
  if(err) throw new Error('Error running server', err);
  console.log(`Server up on ${port}`);
});
