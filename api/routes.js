module.exports = (server) => {
  const controllers = require('./controllers');

  server.route('/')
    .get(controllers.homeRoute);
  
  server.route('/pr-save')
    .post(controllers.postPr);
};