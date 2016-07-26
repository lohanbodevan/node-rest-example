var Koa = require('koa');
var bodyParser = require('koa-body-parser');

var Router = require('./routes');
var Database = require('./lib/database');

const app = new Koa();

const router = Router.router();
app
    .use(Database.connection)
	.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods())

module.exports = app;
