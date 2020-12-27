const route = require('express').Router();
const { 
    getAllUsers,
    getUserByUsername, 
    getUserById,
    createNewUser,
    deleteUser,
    updateUserById
} = require('../controllers/users');

route.get('/' , async(req,res)=>{
    const users = await getAllUsers();
    res.status(200).send(users);
});

route.get('/:id' , async(req , res)=>{
    let userId = req.params.id;
 
    user = await getUserById(userId);

    if(user.length > 0){
        res.status(200).send(user)
    }else{
        res.send(404).send('error : User not Found');
    }
});

route.post('/' ,async(req ,res)=>{
   
    // console.log(req.body);
    try{
        const {name , age , occupation , email , gender} = req.body;
        const user = await createNewUser(name , age , occupation, email ,gender);
        res.status(201).send(user);
        res.send(`No of User Modified : ${user.result.n}`);
    }
    catch(e){
        // console.log(e);
        res.status(402).send('error : All the fields are mandatory');
    }



    // if(!(name) || !(gender) || !(email)|| !(occupation) || !(age)){
    //     res.status(403).send(`{Error : All the fields are mandatory}`);
    // }
});

route.delete('/:id' , async(req ,res)=>{
    try{
        let userId = req.params.id;
        let user =  await deleteUser(userId);
        res.status(200).send(`No of Users Deleted : ${user.result.n}`);
    }
    catch(e){
        res.status(404).send('User with that id not found');
    }
   
})

route.put('/:id' , async(req ,res)=>{
    try{
        let userId = req.params.id;
        let data = req.body;
        let user =  await updateUserById(data, userId);
        res.status(200).send(`No of User Modified : ${user.result.n}`);
    }
    catch(e){
        console.log(e);
        res.status(404).send('User with that id not found');
    }
   
})
module.exports = {
   userRoute: route
}