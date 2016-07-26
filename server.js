'use strict';

var app = require('./src/app');
var port = process.env.PORT || 3000;

app.listen(port);
console.info(' ------- API is running on http://localhost:' + port + ' ------- ');
