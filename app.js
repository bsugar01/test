var express = require ('express');
var session = require ('express-session');
var cookie = require ('cookie-parser');
var path = require ('path');
var ejs= require ('ejs');
var multer = require('multer');
var path = require ('path');
var async = require ('async');
var nodmailer = require ('nodemailer');
var crypto = require ('crypto');
var expressValidator = require ('express-validator');
var  sweetalert = require('sweetalert2');
var app = express();



var bodyParser = require ('body-parser');

var  login = require ('./controllers/login.js');
var  home = require ('./controllers/home.js');
var  signup = require ('./controllers/signup.js');
var add_doc = require('./controllers/add_doctor.js');
var  doc_controller = require ('./controllers/doc_controller.js');
var db = require ('./models/db_controller.js');
var reset = require('./controllers/reset_controller.js');
var set = require('./controllers/set_controller.js');
var employee = require ('./controllers/employee.js');
var logout = require ('./controllers/logout.js');
var verify = require ('./controllers/verify.js');
var store = require ('./controllers/store.js');
var landing = require ('./controllers/landing.js');
var complain = require ('./controllers/complain.js');
var inbox = require ('./controllers/inbox.js');
var appointment = require ('./controllers/appointment.js');

var receipt = require ('./controllers/receipt.js');
var chat = require ('./controllers/chat.js');

var app = express();


app.set('view engine ', 'ejs');




app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookie());
//app.use(expressValidator());


var server =app.listen(10613 , function(){

    console.log('server started');
});

app.use('/login' ,login);
app.use('/home' , home);
app.use('/signup' , signup);
app.use('/doctors', doc_controller);
app.use('/resetpassword' ,reset);
app.use('/setpassword',set);
app.use('/employee',employee);
app.use ('/logout',logout);
app.use ('/verify', verify);
app.use ('/store',store);
app.use ('/',landing);
app.use ('/complain',complain);
app.use ('/inbox',inbox);
app.use ('/appointment',appointment);
app.use('/receipt',receipt);

// app.use('/doctors/add_doctor',add_doc);