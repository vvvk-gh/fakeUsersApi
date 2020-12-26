const { ObjectId } = require("mongodb");
const {createCollection} = require(`../db/db`);

//Get all Users
async function getAllUsers(){
    try{
    const fakeUsers = await createCollection(); 
    const users =  await fakeUsers.find({}).toArray();
        return users;
    }
   catch(e){
       return {error : `Err occured ${e}`}
   }

}

//get user by id
async function getUserById(userId){

    const fakeUsers = await createCollection(); 
    const user =  await fakeUsers.find({ 
            "_id" : ObjectId(userId)
    }).toArray()
        
        return user;
}

//get user by username
async function getUserByUsername(userName){
    
    const fakeUsers = await createCollection(); 
    const user =  await fakeUsers.find({ 
        
        name : userName
    }).toArray()

        return user;        
}

//create a new user 

async function createNewUser(Username , Userage , Useroccupation, Useremail, Usergender) {
    const fakeUsers = await createCollection(); 
    const user = await fakeUsers.insertOne({
        name : Username,
        age: parseInt(Userage),
        occupation:Useroccupation,
        email:Useremail,
        gender :Usergender
    });
    return user;
}

//Delete User

async function deleteUser(userId){
    const fakeUsers = await createCollection(); 
    const user = await fakeUsers.deleteOne({"_id" : ObjectId(userId)}); 
    return user;
} 

//Update User
async function updateUserById(data , userId){
    try{
        const fakeUsers = await createCollection(); 
        const user = await fakeUsers.updateMany(
                {"_id" : ObjectId(userId)}, 
                { $set : data});
        return user; 
        
    }
    catch(E){
        console.log(E);
    }
   
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
//         console.log(users);
// })
// .catch(err => console.log(err))

// getUserById('5fe792bb75cc85790edbaeed')
// .then(user => console.log(user))
// .catch(e => console.log(e));

// getUserByUsername('Samantha')
// .then(user => console.log(user))
// .catch(e => console.log(e));

// deleteUser('5fe792bb75cc85790edbaeed')
//     .then((user)=> console.log(`User Deleted : ${user.result.n}`))
//     .catch((E)=> console.log(E));

// updateUserById({email : 'venky@asiancinemas.com'} , '5fe792bb75cc85790edbaeed')
//     .then((user) => console.log(user.matchedCount))
//     .catch((error) => console.log(error))