const db = require('./db');
const {User} = require(`./model`);

User.bulkCreate([
{name: 'Samson' , age :23 ,occupation: 'IT', email:'samson@samsung.com',gender:'Male'},
{name: 'Falcon' , age : 30 ,occupation: 'Plumber', email:'falcon@outlook.com',gender:'Male'}
], 
{
    ignoreDuplicates : true
});
