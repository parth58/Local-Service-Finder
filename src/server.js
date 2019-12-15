var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var cors=require('cors');

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://Parth5820:Parth5820@cluster0-v7bxg.gcp.mongodb.net/HomeService',{ useNewUrlParser: true },function (err,response){
    if (err) { 
        console.log('Database is not  connected'); 
    }else{
        console.log('Database is connected');
    }
});
app.use(cors());
app.set('port',process.env.port || 8000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const port = process.env.PORT || 8000;
var routes = require('./server-routes');
app.use('/',routes);
const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
   });

