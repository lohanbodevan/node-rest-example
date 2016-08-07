import Koa from 'koa';
import bodyParser from 'koa-body-parser';

import Router from './routes';
import database from './lib/database';

const app = new Koa();

app
    .use(database)
	.use(bodyParser())
	.use(Router().routes())
	.use(Router().allowedMethods());

module.exports = app;
