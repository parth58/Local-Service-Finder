const mongoose=require("mongoose");
const Schema = mongoose.Schema;
let User_Message = new Schema({
    Name:{
        type:String
    },
   
    Email:{
        type:String
    },
   
    Message :{
        type:String
    },

    date_time:{
        type:Date
    }
    
},{collection: 'User_Message'});
module.exports = mongoose.model('User_Message',User_Message);