const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://aryan:aryan@cluster0.t9svvp9.mongodb.net/hotels-rooms'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose