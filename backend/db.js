const mongoose = require('mongoose');
// const uri ="mongodb://localhost:27017";

const server = 'mongodb+srv://basir:basir418@cluster0.ydjhxux.mongodb.net/inotebook';
const database = 'inotebook';
const connectToMongo=async()=>{
    await mongoose.connect(`${server}`)
    .then(()=>{
        console.log("connected to mongo successfully!!")
    }).catch((err)=>{
       console.log("Error Occurs ",err);
    })
}
module.exports=connectToMongo;