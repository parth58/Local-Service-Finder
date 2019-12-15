const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Orders = new Schema({
    User: {
        _id:String,
        FirstName: String,
        LastName: String,
        Email: String,
        PhoneNo: Number,
        Address1: String,
        Address2: String,
        City: String,
        Zip: Number,
        Password: String,
        JoinDate: Date
    },
    Professional: {
        _id: String,
        FirstName: String,
        LastName: String,
        Email: String,
        PhoneNo: Number,
        Address: String,
        Gender:String,
        Service:String,
        Experience:Number,
        Password: String,
        JoinDate: Date
    },

    Description: {
        type: String
    },

    Address: {
        type: String
    },
    Budget: {
        type: Number
    },
    Estimate: {
        type: Number
    },
    Time: {
        type: Date
    },
    Date: {
        type: Date
    },
    Request_datetime: {
        type: Date
    },
    Status: {
        type: String
    },
    Chat: [
        {
            sender: String,
            sender_id:String,
            timestamp: Date,
            message: String,
        },
    ]
}, { collection: 'Orders' });
module.exports = mongoose.model('Orders', Orders);