const Sequelize = require('sequelize');

const db = new Sequelize('fakeuserapi', 'fakeapiuser', 'fakeapipass', {
    host: 'localhost',
    dialect: 'mysql'
  });

//authenticate
// db.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

module.exports = {Sequelize, db}