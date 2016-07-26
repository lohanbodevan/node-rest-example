var HTTPStatus = require('http-status');

var exports = module.exports = {};

exports.healthcheck = function() {
    let databaseConnection = true;
    this.repository
        .authenticate()
        .then(function(err) {
            databaseConnection = true;
        })
        .catch(function (err) {
            databaseConnection = false;
        });

    this.body = {
        service: true,
        database: databaseConnection
    };

    this.status = HTTPStatus.OK;
};
