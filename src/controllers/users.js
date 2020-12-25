const db = require('../db/db');
const {User} = require('../db/model');

//Get all Users
async function getAllUsers(){
    try{
        let users =  await User.findAll();
        return users;
    }
   catch(e){
       return {error : `Err occured ${e}`}
   }

}

//get user by id
async function getUserById(userId){
    let user = await User.findAll({
            where: {
                id: userId
            }
        });   
        
        return user;
}

//get user by username
async function getUserByUsername(userName){
    let user = await User.findAll({
            where: {
                name: userName
            }
        });
        return user;        
}

//create a new user 

async function createNewUser(Username , Userage , Useroccupation, Useremail, Usergender) {
    const user = await User.create({
        name : Username,
        age: parseInt(Userage),
        occupation:Useroccupation,
        email:Useremail,
        gender :Usergender
    })
    return user;
}

//Delete User

async function deleteUser(userId){

    User.destroy({
        where: {
          id: userId
        }
      });
} 

//Update User
async function updateUserById(data , userId){
    User.update(data , {
        where :{
            id : userId
        }
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    createNewUser,
    deleteUser,
    updateUserById
}

// Testing the functions

// getAllUsers()
// .then((users)=>{
//     for(let user of users){
//         console.log(user.dataValues);
//     }
// })
// .catch(err => console.log(err))

// getUserById(2)
// .then(user => console.log(user))
// .catch(e => console.log(e));

// getUserByUsername('Falcon')
// .then(user => console.log(user))
// .catch(e => console.log(e));

// deleteUser(3)
//     .then(()=> console.log(`User Deleted `))
//     .catch((E)=> console.log(E));

// updateUserById({occupation : 'Em Eng 1'} , 2)
//     .then((user) => console.log(user))
//     .catch((error) => console.log(error))