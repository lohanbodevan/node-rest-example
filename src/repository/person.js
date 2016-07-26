var PersonModel = require('./model/person');

class Person {
    constructor(connection) {
        this.model = PersonModel.getModel(connection);
    }

    *getAll() {
        let data = yield this.model.findAll();
        return data.map(i => i.toJSON());
    }
}

module.exports = Person
