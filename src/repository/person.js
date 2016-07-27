var PersonModel = require('./model/person');

class Person {
    constructor(connection) {
        this._conn = connection;
    }

    *getAll() {
        let model = yield this._getModel();

        return (yield model.findAll()).map(i => i.toJSON());
    }

    _getModel() {
        return PersonModel.getModel(this._conn);
    }
}

module.exports = Person
