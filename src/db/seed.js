
const {createCollection} = require(`./db`);

async function seedData() {
    try{
        let fakeUsers = await createCollection();    
        let seedData = await fakeUsers.insertMany([
            {name: 'chiranjeevi' , age:61 ,occupation: 'actor', email:'chiru@bigboss.com',gender:'male'},
            {name: 'nagarjuna' , age:60 ,occupation: 'actor', email:'nag@anapurna.com',gender:'male'},
            {name: 'venkatesh' , age:32 ,occupation: 'actor', email:'venky@sureshproductions.com',gender:'male'}
        ]);  
        console.log(seedData.ops);
    }
    catch(e){
        console.log(e);
    }
}

seedData()