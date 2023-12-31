const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}/${config.dbName}`;

module.exports = {
    development: {
        url: URI,
        dialect: 'mysql'
    },
    test: {
        url: URI,
        dialect: 'mysql'
    },
    production: {
        url: URI,
        dialect: 'mysql'
    }
}


