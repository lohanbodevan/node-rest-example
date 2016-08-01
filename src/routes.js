import Router from 'koa-router';

import healthcheck from './handler/healthcheck';
import {getPersons} from './handler/person';

export default function () {
    const routes = new Router({});

    routes.get('healthcheck', '/healthcheck', healthcheck); 
    routes.get('persons', '/persons', getPersons); 

    return routes;
};
