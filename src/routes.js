var Router = require('koa-router');

var {healthcheck} = require('./handler/healthcheck');
var {persons} = require('./handler/person');

var exports = module.exports = {};

exports.router = function() {
    let route = new Router({});

    route.get('healthcheck', '/healthcheck', healthcheck); 
    route.get('persons', '/persons', persons); 

    return route;
};
