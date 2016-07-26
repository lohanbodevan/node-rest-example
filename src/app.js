var Koa = require('koa');
var bodyParser = require('koa-body-parser');

var Router = require('./routes');

const app = new Koa();

const router = Router.router();
app
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods())

module.exports = app;
