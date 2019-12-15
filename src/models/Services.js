const mongoose=require("mongoose");
const Schema = mongoose.Schema;
let Services = new Schema({
    Name:{
        type:String
    },
   
    icon:{
        type:String
    },
   
    banner :{
        type:String
    },

},{collection: 'Services'});
module.exports = mongoose.model('Services',Services);