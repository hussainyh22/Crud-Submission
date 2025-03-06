const mongoose = require("mongoose");

async function connectMongoose(url)
{
    try{
       await mongoose.connect(url);
       //.then(() => console.log(`MongoDb is Connected!`));
    }
    catch(err){
        console.log(`Error Occured While Connecting with MongoDb:- ${err}`);
    }
}

module.exports = {
    connectMongoose,
}