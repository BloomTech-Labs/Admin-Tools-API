module.exports = (server) => {
  const controllers = require('./controllers');

  server.route('/')
    .get(controllers.homeRoute);

  server.route('/pull-requests')
    .get(controllers.getAllPrs);
  
  server.route('/pull-requests/clear')
    .delete(controllers.clearClosedPrs);
    
  server.route('/pr-save')
    .post(controllers.postPr);
   
};