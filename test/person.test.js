var Chai = require('chai');

var app = require('../src/app');
var Person = require('../src/repository/person');

let expect = Chai.expect;
let assert = Chai.assert;

describe('Person tests suite', function() {
    it('Repository Person has connection sigleton object', function(done) {
        const person = new Person(MockRepository);
        person._getModel().then(function(model) {
            assert.instanceOf(model, ModelMock);
            done();
        });
    });

    it('getAll method should return collection', function *getAll(done) {
        const person = new Person(MockRepository);
        let collection = yield person.getAll();

        assert.isArray(collection);
        assert.equal(collection.length, 2);

        expect(collection[0]).to.have.property("id");
        expect(collection[0]).to.have.property("firstName");
        expect(collection[0]).to.have.property("lastName");
        expect(collection[0]).to.have.property("createdAt");
        expect(collection[0]).to.have.property("updatedAt");

        done();
    });
});

class ModelMock {
    create(options) {
        return {}; 
    }

    sync() {
        return new Promise(
            function(resolve, reject) {
                setTimeout(function() {
                    resolve()
                }, 1000)
            }  
        );
    }

    *findAll() {
        return [new PersonMock(), new PersonMock()];
    }
};

class PersonMock {
    toJSON() {
        return {
            id: 1,
            firstName: "John",
            lastName: "Hancock",
            createdAt: "2016-07-26T19:59:25.253Z",
            updatedAt: "-07-26T19:59:25.253Z"
        }
    }
};

class MockRepository {
    static define(name, options) {
        return new ModelMock();
    }
};
