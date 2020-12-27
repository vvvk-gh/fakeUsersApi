const {MongoClient} = require('mongodb');

// MongoDB url
const url = `mongodb+srv://fakeapiuser:fakeapipass@cluster0.npauu.mongodb.net`;

//DB Name
const dbName = 'fakeusersDb';

let fakeUsers;
async function createCollection(){
  try{
    const client = await MongoClient.connect(url);
    const fakeusersDb = client.db(dbName);
    fakeUsers = fakeusersDb.collection('fakeUsers');
    // console.log(fakeUsers.namespace);
    // console.log(`DB and collection Created`);
    return fakeUsers
  }
  catch(E){
    console.log(E);
  } 
}

module.exports = {
  createCollection 
}
