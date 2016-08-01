import HTTPStatus from 'http-status';
import Chai from 'chai';
import Supertest from 'supertest';

import app from '../src/app';

let expect = Chai.expect;
let assert = Chai.assert;
let request = Supertest.agent(app.listen());

describe('API tests suite', function() {
    it('Healthcheck should return 200 and json content type', function(done) {
        let expected = {
            service: true
        }

        request
            .get('/healthcheck')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(HTTPStatus.OK)
            .end(function(err, res) {
                if (err) return done(err);

                assert.equal(HTTPStatus.OK, res.status);
                assert.equal(expected.service, res.body.service);
                done();
            });
    });

    it('Healthcheck should check database connection', function(done) {
        let expected = {
            database: true
        }

        request
            .get('/healthcheck')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(HTTPStatus.OK)
            .end(function(err, res) {
                if (err) return done(err);

                assert.equal(HTTPStatus.OK, res.status);
                assert.equal(expected.database, res.body.database);
                done();
            });
    });
});
