import Sequelize from 'sequelize';


let dbName = process.env.DB_NAME || '';
let dbUser = process.env.DB_USER || '';
let dbPassword = process.env.DB_PASSWORD || '';
let dbHost = process.env.DB_HOST || '';
let dbDialect = process.env.DB_DIALECT || 'sqlite';
let dbStorage = process.env.DB_STORAGE || './database.sqlite';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDialect,
    storage: dbStorage,
    logging:  null
});

export default function *(next) {
    this.repository = sequelize;
    yield next;
};
