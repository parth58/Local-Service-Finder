const mongoose=require("mongoose");
const Schema = mongoose.Schema;
let User = new Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Email:{
        type:String,
        lowercase: true
    },
    PhoneNo:{
        type:Number
    },
    Address1:{
        type:String
    },
    Address2:{
        type:String
    },
    City:{
        type:String
    },
    Zip:{
        type:Number
    },
    Password:{
        type:String
    },
    JoinDate:{
        type:Date,
        default:Date.now
    }

    

},{collection: 'User'});
module.exports = mongoose.model('User',User);