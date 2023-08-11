// import dependencies you will use
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//setting up Express Validator
const { check, validationResult } = require('express-validator');

// set up variables to use packages
var myApp = express();
myApp.use(bodyParser.urlencoded({ extended: false }));

// set path to public folders and view folders

myApp.set('views', path.join(__dirname, 'views'));
//use public folder for CSS etc.
myApp.use(express.static(__dirname + '/public'));
myApp.set('view engine', 'ejs');
// set up different routes (pages) of the website

//home page
myApp.get('/', function (req, res) {
    res.render('OnlineStore'); // no need to add .ejs to the file name
});

// start the server and listen at a port
myApp.listen(4040);

//tell everything was ok
console.log('Everything executed fine.. website at port 4040....');
