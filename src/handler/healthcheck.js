var HTTPStatus = require('http-status');

var exports = module.exports = {};

exports.healthcheck = function() {
    this.status = HTTPStatus.OK;
    this.body = {
        service: true
    };
};
