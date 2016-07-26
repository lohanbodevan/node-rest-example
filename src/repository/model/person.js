var Sequelize = require('Sequelize');

var exports = module.exports = {};

exports.getModel = function(connection) {
    let Person = connection.define('person', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });

    Person.sync().then(function () {
        return Person.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
    });

    return Person;
};
