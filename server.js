//enable path
var path = require("path");

//enable express
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router - point the server to the route js files

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.get('/', function(req,res){
    res.send('hello joe')
});

//Listener
app.listen(PORT, function(){
    console.log('listening on ' + PORT)
});