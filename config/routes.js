const userApi = require('../api/users');
const prApi = require('../api/pullrequests');
const homeApi = require('../api/home');

module.exports = (server) => {
    /*
    server.route('/users*')
        .get(userApi)
        .post(userApi)
        .put(userApi)
        .delete(userApi);
    */
    server.route('/pull-requests*')
        .get(prApi)
        .post(prApi)
        .put(prApi)
        .delete(prApi);

    server.route('*')
        .get(homeApi);  

}