//enable path
var path = require("path");

//import friendArray js file
var friends = require("../data/friends");

//export API routes
module.exports = function(app) {
    //GET friends.js
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

    //POST for incoming survey results
    app.post("/api/friends", function(req,res){
        var input = req.body;
        console.log("Client input: " + JSON.stringify(input));
    });

};