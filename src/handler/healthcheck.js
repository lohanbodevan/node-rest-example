import HTTPStatus from 'http-status';

export default function healthcheck() {
    let databaseConnection = true;
    this.repository
        .authenticate()
        .then(function(err) {
            databaseConnection = true;
        })
        .catch(function (err) {
            databaseConnection = false;
        });

    this.body = {
        service: true,
        database: databaseConnection
    };

    this.status = HTTPStatus.OK;
};
