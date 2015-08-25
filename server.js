// require the path module
var path = require("path");
// require express and create the express app
var express = require("express");
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());


// static content
app.use(express.static(path.join(__dirname, "./static")));
// set the views folder and set up ejs
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


//start adding db
//require mongoose and create the mongoose variable
var mongoose = require('mongoose');
//this is how we connect to the mongodb database using mongoose --"basic_mongoose" is the name of our db in mongodb -- this shoudl match the name of the db you are going  to use ofr your project. 
mongoose.connect('mongodb://localhost/basic_mongoose');


// root route
app.get('/', function(req, res) {
 // This is where we would get the users from the database and send them to the index view to be displayed.
 console.log("#1 req.bod",req.body);
 console.log("#1 res.body", res.body)
 res.render('index');
})
// route to add a user
app.post('/users', function(req, res) {
 console.log("#2 users POST DATA", req.body);
 // This is where we would add the user from req.body to the database.
 res.redirect('/');
})


// listen on 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})