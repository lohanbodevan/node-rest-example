import Sequelize from 'sequelize';

class PersonModel {
    static getModel(connection) {
        let Person = connection.define('person', {
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            }
        });

        //force: true, recreate table
        return Person.sync({force: false}).then(function () {
            Person.create({
                firstName: 'John',
                lastName: 'Hancock'
            });

            return Person;
        });
    }
};

export default PersonModel;
