var Person = require('../repository/person');

var exports = module.exports = {};

exports.persons = function*() {
    const person = new Person(this.repository);    
    this.body = yield person.getAll();
    console.info('Found ' + this.body.length + ' persons');
};
