'use strict';

if (process.env.NODE_ENV === 'development') {
    require('babel-register');
}

var port = process.env.PORT || 3000;
var app = require('./app');

app.listen(port);
