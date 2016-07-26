var Router = require('koa-router');

var {healthcheck} = require('./handler/healthcheck');

var exports = module.exports = {};

exports.router = function() {
    let route = new Router({});

    route.get('healthcheck', '/healthcheck', healthcheck); 

    return route;
};
