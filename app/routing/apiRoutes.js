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

        //variable for user answers, based on scores array
        var responses = userData.scores;

        //variables for best match
        var matchName = "";
        var matchImage = "";
        var totalDifference = 100;  //Initial value larger than any possible difference comparison

        //Check all existing friends in the object
        for (var i = 0; i < friends.length; i++) {

            //calculate difference for each question
            var difference = 0;
            for (var j = 0; j < responses.length; j++) {
                difference += Math.abs(friends[i].scores[j] - responses[j]);
            }
            //match friend if the difference is the least
            if (difference < totalDifference) {
                totalDifference = difference
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }
        //Adding the new user to the friends data
        friends.push(input);
        //Send response.json
        res.json({status: "OK", matchName: matchName, matchImage: matchImage});
    });
};