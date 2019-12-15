const mongoose=require("mongoose");
const Schema = mongoose.Schema;
let Professional = new Schema({
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
    Address:{
        type:String
    },
    Gender:{
        type:String
    },
    Service:{
        type:String
    },
    
    Password:{
        type:String
    },
    Experience:{
        type:Number
    },
    Image:{
        type:String
    },
    JoinDate:{
        type:Date,
        default:Date.now
    },
    Review:[
        {
            User:String,
            Timestamp:Date,
            Stars:Number,
            Review_msg:String

        }
    ]

},{collection: 'Professional'});
module.exports = mongoose.model('Professional',Professional);