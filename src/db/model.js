const Sequelize = require('sequelize').DataTypes;
const {db} = require('./db');

//creating a model           #model = table in sql
const User = db.define('user', {
    name : {
        type: Sequelize.STRING(20), 
        allowNull :false
    },
    age: {
        type :Sequelize.INTEGER,
        allowNull : false
    },
    occupation : {
        type: Sequelize.STRING(30), 
        allowNull :false
    },
    email:{
        type: Sequelize.STRING(20), 
        allowNull :false
    },
    gender :{
        type: Sequelize.STRING(8), 
        allowNull :false
    },
    
});

db.sync()
    .then(()=> console.log('Db Synced'))
    .catch(err => console.log(err));

module.exports = {
    User
}