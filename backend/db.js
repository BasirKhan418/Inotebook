const mongoose = require('mongoose');
// const uri ="mongodb://localhost:27017";

const server = '127.0.0.1:27017';
const database = 'inotebook';
const connectToMongo=async()=>{
    await mongoose.connect(`mongodb://${server}/${database}`)
    .then(()=>{
        console.log("connected to mongo successfully!!")
    }).catch((err)=>{
       console.log("Error Occurs ",err);
    })
}
module.exports=connectToMongo;