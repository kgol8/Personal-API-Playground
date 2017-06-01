var fs = require('fs');	//initialises the required modules
var socketio = require('socket.io');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var server = require('http').createServer(app);

var server_tools = require('./server_tools');
var rand_quote = server_tools.get_random_quote();

// Connect to mongoose
mongoose.connect('mongodb://localhost/API_test');
var db = mongoose.connection;

// Configure body_parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Express routing
app.use(express.static(__dirname + "/"));	//set the location of the css file to serve
app.get('/', function(req, res, next) {	//set file to serve when a connection is made
    res.sendFile(__dirname + '/Pages/home.html')
});

var apiRouter = express.Router();
var generalRouter = express.Router();

apiRouter.get('/', function(req, res, next) {
    res.json({message: 'hello, world'});
});

generalRouter.get('/404', function(req, res, next) {
    res.sendFile(__dirname + "/Pages/missingPage.html");
});

// Register routes
app.use('/api', apiRouter);
app.use('/', generalRouter);

//  Listen
server.listen(8080);
console.log('Listening at: localhost:8080');

// Bi-directional communication
socketio.listen(server).on('connection', function (connection_instance) {	//when a connection to the server is made
    console.log('connection made');
    connection_instance.emit('data', Date.now()); //send the data to the client with a timestamp
});
