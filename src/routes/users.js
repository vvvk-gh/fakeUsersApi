const route = require('express').Router();
const { 
    getAllUsers,
    getUserByUsername, 
    getUserById,
    createNewUser
} = require('../controllers/users');

route.get('/' , async(req,res)=>{
    const users = await getAllUsers();
    res.status(200).send(users);
});

route.get('/:id' , async(req , res)=>{
    let userId = req.params.id;
    if(isNaN(userId)){
        user = await getUserByUsername(userId);
    }
    else{
        user = await getUserById(userId);
    }

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
    }
    catch(e){
        // console.log(e);
        res.status(406).send('error : All the fields are mandatory');
    }
   

    // if(!(name) || !(gender) || !(email)|| !(occupation) || !(age)){
    //     res.status(403).send(`{Error : All the fields are mandatory}`);
    // }
});


module.exports = {
   userRoute: route
}