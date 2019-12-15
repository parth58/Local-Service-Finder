var express = require('express');
var app = express();
var cors = require('cors');
var bcrypt = require('bcrypt');
var router = express.Router();
router.use(cors());
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: 'noreply.homeservices4u@gmail.com', pass: 'HomeServices4u' } });

var User = require('./models/User');
var User_Message = require('./models/User_Message');
var Service = require('./models/Services');
var Professional = require('./models/Professional');
var Orders = require('./models/Order');

router.post("/register", function (req, res) {
    console.log('Register is Processing..');
    var user = new User();
    var now = new Date();

    user.FirstName = req.body.FirstName;
    user.LastName = req.body.LastName;
    user.Password = req.body.Password;
    user.Email = req.body.Email;
    user.PhoneNo = req.body.PhoneNo;
    user.Address1 = req.body.Address1;
    user.Address2 = req.body.Address2;
    user.Zip = req.body.Zip;
    user.City = req.body.City;
    user.JoinDate = now;





    User.findOne({ "Email": req.body.Email.toLowerCase() }, function (err, u) {
        if (err) {
            console.log("Error Occured.");
            console.log(err);
            res.send({ status: 'fail', message: err });

        }

        if (!u) {


            user.save(function (err, result) {
                if (err) {
                    console.log("Error Occured.");
                    console.log(err);
                    return res.send({ status: 'fail', message: err });
                }
                else {
                    console.log("User Successfully Registered and Userdetails..");
                    console.log(user);
                    var mailOptions = {
                        from: 'youremail@gmail.com',
                        to: user.Email,
                        subject: 'Thank You For Registering @ HomeService',
                        html: "<h1 style='color:blue;' >Your Details</h1><table style='background:MintCream; width: 100%;border:2px solid black;'>" +
                            "<tr><td>Name</td><td>" + user.FirstName + " " + user.LastName + "</td></tr>" +
                            "<tr><td>Email</td><td>" + user.Email + "</td></tr>" +
                            "<tr><td>Contact No</td><td>" + user.PhoneNo + "</td></tr>" +
                            "<tr><td>Address</td><td>" + user.Address1 + " " + user.Address2 + "</td></tr>" +
                            "<tr><td>City</td><td>" + user.City + "</td></tr>" +
                            "<tr><td>Zip Code</td><td>" + user.Zip + "</td></tr>" +
                            "</table>"
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) { console.log(error); }
                        else { console.log('Email sent: ' + info.response); }
                    });
                    return res.send({ status: 'Success', message: 'Succesfully Registerd' });
                }
            });

        }
        else {
            return res.send({ status: 'fail', message: 'User Already Exist' });
        }
    })
});

router.post("/registerProf", function (req, res) {
    console.log('Register is Processing..');
    var user = new Professional();
    var now = new Date();

    user.FirstName = req.body.FirstName;
    user.LastName = req.body.LastName;
    user.Password = req.body.Password;
    user.Email = req.body.Email;
    user.PhoneNo = req.body.PhoneNo;
    console.log("in register prof add" + req.body.Address)
    user.Address = req.body.Address;
    user.Gender = req.body.Gender;
    user.Service = req.body.Service;
    user.Experience = req.body.Experience;
    user.JoinDate = now;
    user.Image = null;




    Professional.findOne({ "Email": req.body.Email.toLowerCase() }, function (err, u) {
        if (err) {
            console.log("Error Occured.");
            console.log(err);
            res.send({ status: 'fail', message: err });

        }

        if (!u) {


            user.save(function (err, result) {
                if (err) {
                    console.log("Error Occured.");
                    console.log(err);
                    return res.send({ status: 'fail', message: err });
                }
                else {
                    console.log("Professinal Successfully Registered and details..");
                    console.log(user);
                    var mailOptions = {
                        from: 'youremail@gmail.com',
                        to: user.Email,
                        subject: 'Thank You For Registering @ HomeService',
                        html: "<h1 style='color:blue;' >Your Details</h1><table style='background:MintCream; width: 100%;border:2px solid black;'>" +
                            "<tr><td>Name</td><td>" + user.FirstName + " " + user.LastName + "</td></tr>" +
                            "<tr><td>Email</td><td>" + user.Email + "</td></tr>" +
                            "<tr><td>Contact No</td><td>" + user.PhoneNo + "</td></tr>" +
                            "<tr><td>Address</td><td>" + user.Address + "</td></tr>" +
                            "<tr><td>Gender</td><td>" + user.Gender + "</td></tr>" +
                            "<tr><td>Service</td><td>" + user.Service + "</td></tr>" +
                            "<tr><td>Experience</td><td>" + user.Experience + "</td></tr>" +
                            "</table>"
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) { console.log(error); }
                        else { console.log('Email sent: ' + info.response); }
                    });
                    return res.send({ status: 'Success', message: 'Succesfully Registerd' });
                }
            });

        }
        else {
            return res.send({ status: 'fail', message: 'Professional Already Exist' });
        }
    })
});

router.post("/logincheck", function (req, res) {
    console.log("user logging check is processing...");
    User.findOne({ "Email": req.body.Email.toLowerCase() }, function (err, result) {
        if (err) {
            console.log(err);

        }
        else {
            if (!result) {
                return res.send({ status: 'fail', message: 'User Not Exist' });
            }
            if (result) {
                console.log(result.Password + ' ' + req.body.Password);
                if (req.body.Password == result.Password) {


                    console.log(result.FirstName + " " + "logged in..");
                    return res.send({ status: 'success', user: result });
                }
                else {
                    console.log("Incorrect Crediantials...Please try Again..");
                    return res.send({ status: 'fail', message: 'Invalid Credentials' });
                }
            }
        }

    });
});

router.post("/proflogincheck", function (req, res) {
    console.log("prof logging  check is processing...");
    Professional.findOne({ "Email": req.body.Email.toLowerCase() }, function (err, result) {
        if (err) {
            console.log(err);

        }
        else {
            if (!result) {
                console.log("Prof Not Exist.");
                return res.send({ status: 'fail', message: 'User Not Exist' });
            }
            if (result) {
                console.log(result.Password + ' ' + req.body.Password);
                if (req.body.Password == result.Password) {


                    console.log(result.FirstName + " " + "logged in..");
                    return res.send({ status: 'success', user: result });
                }
                else {
                    console.log("Incorrect Crediantials...Please try Again..");
                    return res.send({ status: 'fail', message: 'Invalid Credentials' });
                }
            }
        }

    });
});


router.post("/user_message", function (req, res) {
    console.log('user Message  is Processing..');
    var user_message = new User_Message();
    var now = new Date();
    console.log("usermessge");
    console.log(req.body.Name + " " + req.body.Email + " " + req.body.Message);
    user_message.Name = req.body.Name;
    user_message.Email = req.body.Email;
    user_message.Message = req.body.Message;
    user_message.date_time = now;



    user_message.save(function (err, result) {
        if (err) {
            console.log("Error Occured.");
            console.log(err);
            return res.send({ status: 'fail', message: err });
        }
        else {
            console.log("User Message saving");
            console.log(user_message)
            return res.send({ status: 'Success', message: ' Message Succesfully Sent' });
        }
    });


});

router.post("/placeorder", function (req, res) {
    console.log('user Order is Processing..');
    var order = new Orders();
    var now = new Date();
    order.User = req.body.User;
    order.Professional = JSON.parse(req.body.Professional);
    order.Description = req.body.Description;
    order.Address = req.body.Address;
    order.Budget = req.body.Budget;
    order.Estimate = -1;
    order.Status = 'Requested';
    d = new Date(req.body.Date);
    order.Date = d;
    t = req.body.Time.split(':').reduce((h, m) => {
        d.setHours(h, m);
    });

    order.Time = d;

    order.Request_datetime = now;



    order.save(function (err, result) {
        if (err) {
            console.log("Error Occured.");
            console.log(err);
            return res.send({ status: 'fail', message: err });
        }
        else {
            console.log("order saving in dATABASE");
            console.log(order)
            return res.send({ status: 'Success', message: 'Request Sent Successfully' });
        }
    });


});


router.get("/Services", function (req, res) {
    console.log("Getting services from database");
    Service.find({}, function (err, result) {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }
        console.log("services---")
        console.log(result);
        res.send(result);

    });

});

router.get("/professional", (req, res) => {
    Professional.find(function (err, result) {
        if (err) {
            res.status(400);
            res.send("Unable to find names");
        }
        else {
            console.log("All employees returned");
            res.send(result);
        }
    });
});

router.get("/professional/:id", (req, res) => {
    Professional.findById(req.params.id, function (err, result) {
        if (err) {
            console.log("Unable to find an prof");
            res.status(400);
            res.send("Unable to find an Professional");
        }
        else {
            console.log("Professional record returned");
            res.send(result);
        }
    });
});

router.get("/professional/service/:sname", (req, res) => {
    Professional.find({ Service: req.params.sname }, function (err, result) {
        if (err) {
            console.log("Unable to find an prof");
            res.status(400);
            res.send("Error! Unable to find an Professinal");
        }
        else {
            console.log("Professionals of service " + req.params.sname + " returned");
            console.log(result);
            res.send(result);
        }
    });
});


router.put("/professional_review", (req, res) => {
    Professional.findById(req.body._id, function (err, emp) {
        if (err) {
            console.log("No Professional with given id found!");
            res.status(400);
            res.send("Sorry, No Professional with given id found!");
        }


        emp.Review = req.body.Review;
        Professional.save(function (err) {
            if (err) {
                console.log("Error! Can't Save the Review");
                res.status(400);
                res.send("Error! Can't Save the Review");
            }
            else {
                console.log("Professional reviews Saved  successfully");
                res.send({ "message": "Thank You For Review! Your Review Submitted Successfully" });
            }
        });
    });
});

// Critical



router.get("/orders", (req, res) => {
    Orders.find(function (err, orders) {
        if (err) {
            res.status(400);
            res.send("Unable to fetch orders");
        }
        else {
            console.log("All  orders returned");
            res.send(orders);
        }
    });
});

router.get("/order/:id", (req, res) => {
    console.log("Order of Id");
    console.log(req.params.id);
    Orders.findById(req.params.id, function (err, order) {
        if (err) {
            console.log("Unable to find an order");
            res.status(400);
            res.send("Unable to find an order");
        }
        else {
            console.log("order of id " + req.params.id + "returned");
            console.log(order);
            res.send(order);
        }
    });
});


router.get("/order/user/:id", (req, res) => {
    console.log("Order of User");
    console.log(req.params.id);
    Orders.find({ "User._id": req.params.id } , function (err, order) {
        if (err) {
            console.log("Unable to find an user in order record");
            res.status(400);
            res.send("Unable to find an user in order record");
        }
        else {
            console.log("order of user " + req.params.id + " returned");
            console.log(order);
            res.send(order);
        }
    });
});

router.get("/order/user/requested/:id", (req, res) => {
    console.log("Requested Order of User");
    console.log(req.params.id);
    Orders.find({ $and: [{ "User._id": req.params.id }, { "Status": "Requested" }] }, function (err, order) {
        if (err) {
            console.log("Unable to find an user in order record");
            res.status(400);
            res.send("Unable to find an user in order record");
        }
        else {
            console.log("requested order of user " + req.params.id + " returned");
            console.log(order);
            res.send(order);
        }
    });
});

router.get("/order/prof/:id", (req, res) => {
    Orders.find({ "Professional._id": req.params.id }, function (err, order) {
        if (err) {
            console.log("Unable to find an Prosessional in order record");
            res.status(400);
            res.send("Unable to find an Prosessional in order record");
        }
        else {
            console.log("order of Professional " + req.params.id + "returned");
            res.send(order);
        }
    });
});

router.get("/orders/requested/prof/:id", (req, res) => {
    Orders.find({ $and: [{ "Professional._id": req.params.id }, { "Status": "Requested" }] }, function (err, order) {
        if (err) {
            console.log("Unable to find an Prosessional in order record");
            res.status(400);
            res.send("Unable to find an Prosessional in order record");
        }
        else {
            console.log("Requested order returned");
            console.log(order)
            res.send(order);
        }
    });
});
router.get("/orders/pending/prof/:id", (req, res) => {
    Orders.find({ $and: [{ "Professional._id": req.params.id }, { "Status": "Approved" }] }, function (err, order) {
        if (err) {
            console.log("Unable to find an Prosessional in order record");
            res.status(400);
            res.send("Unable to find an Prosessional in order record");
        }
        else {
            console.log("Pending Order Returned returned");
            res.send(order);
        }
    });
});
router.get("/orders/previous/prof/:id", (req, res) => {
    Orders.find({ $and: [{ "Professional._id": req.params.id }, { "Status": "Done" }] }, function (err, order) {
        if (err) {
            console.log("Unable to find an Prosessional in order record");
            res.status(400);
            res.send("Unable to find an Prosessional in order record");
        }
        else {
            console.log("Done Orders returned");
            res.send(order);
        }
    });
});




router.post("/order/updatestatus/:id", (req, res) => {
    console.log("Updating Order Status");
    Orders.findById(req.params.id, function (err, order) {
        if (err) {
            console.log("Error! Can't Update Status");
            res.status(400);
            res.send("Error! Can't Update Status");
        }

        order.Status = req.body.status;
       order.save(function (err) {
            if (err) {
                console.log("Error! Can't Update Status");
                res.status(400);
                res.send("Error! Can't Update Status");
            }
            else {
                console.log("Order Status updated successfully");
                res.send({ "message": "Order Status updated successfully" });
            }
        });
    });
});


router.post("/order/updateestimate/:id", (req, res) => {
    console.log("Updating Order Estimate");
    Orders.findById(req.params.id, function (err, order) {
        if (err) {
            console.log("Error! Can't Update Estimate");
            res.status(400);
            res.send("Error! Can't Update Estimate");
        }

        order.Estimate = req.body.estimate;
        order.save(function (err) {
            if (err) {
                console.log("Unable to update ORDER Estimate");
                res.status(400);
                res.send("Unable to ORDER Estimate");
            }
            else {
                console.log("Order Estimate updated successfully");
                res.send({ "message": "Order Estimate updated successfully" });
            }
        });
    });
});

router.post("/order/addchatmessage/:id", (req, res) => {
    console.log("Updating Order Chat adding Message");
    // Orders.findById(req.params.id, function (err, order) {
    //     if (err) {
    //         console.log("No order with given id found!");
    //         res.status(400);
    //         res.send("No order with given id found!");
    //     }
       
       
        //order.Chat =order.Chat.push(req.body);
       
        // order.save(function (err) {
        //     if (err) {
        //         console.log("Unable to update order  chat");
        //         res.status(400);
        //         res.send("Unable to update order  chat");
        //     }
        //     else {
        //         console.log("Chat mesage added  successfully");
        //         res.send({ "message": "Chat mesage added  successfully" });
        //     }
        // });
    // });
    console.log(req.body);
    console.log(req.params.id);
  
    Orders.update(
        { "_id" : req.params.id},
        {$push: {"Chat": 
            req.body
        }}
    );
});





//critical end



module.exports = router