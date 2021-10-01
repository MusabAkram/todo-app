const { Sequelize } = require('sequelize');
const db = require('../config/database')
const sequelize = new Sequelize(db.NAME, db.USERNAME, db.PASSWORD, {
    host: db.HOST,
    dialect: 'mysql',
    port: db.PORT
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(error => {
    console.error('Unable to connect to the database:', error);
})

module.exports = sequelize