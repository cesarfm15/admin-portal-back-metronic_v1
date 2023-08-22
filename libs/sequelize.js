const { Sequelize } = require('sequelize');
const { config } = require('./../config/config');
const setupModels = require('./../db/models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
    
const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    loading: true,
})

setupModels(sequelize);

//ara preproduction
sequelize.sync();
// sequelize.sync({ alter: true });

module.exports = sequelize;
