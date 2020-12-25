const express = require('express');
const path = require('path');
const {
    userRoute
} = require('./routes/users');
const app = express();
const port = 3434;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/' , express.static(path.join(__dirname,"/public")));
app.use('/api/users' , userRoute);


app.listen(port ,()=>{
    console.log(`App Listening on ${port}`);
});

