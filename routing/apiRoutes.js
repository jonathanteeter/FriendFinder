// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// var tableData = require("../data/tableData");
// var waitListData = require("../data/waitinglistData");

var friendArray = require("../app/data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function(req, res) {
        res.json(friendArray);
    });

    // ---------------------------------------------------------------------------
    app.post("/api/friends", function(req, res) {

        console.log("TEST");
        var friend = req.body;

        // response in JSON
        res.json(true);
        console.log(friendArray);  // Friends from friends.js
        console.log(friend);  // new friend entered in Survey

        var currentFriend = friend
        var previousFriend;
        var totalDiff = 0;
        var matchFriend = {name: '', photo: '', scores: Infinity};

        for (var i = 0; i < friendArray.length; i++) {

            previousFriend = friendArray[i];

            // for (var x = 0; x < currentFriend.scores.length; x++) {
            for (var x = 0; x < 10; x++) {
                var currentFriendScore = friend.scores[x];
                var previousFriendScore = previousFriend.scores[x];

                totalDiff += Math.abs(currentFriendScore - previousFriendScore);

                console.log('currentFriend = ' + currentFriend.name);
                console.log(previousFriend.name + ' score = ' + totalDiff);
            }

            // Is new Friend closer in score?
            if (totalDiff <= matchFriend.scores) {
                matchFriend.name = previousFriend.name;
                matchFriend.photo = previousFriend.photo;
                matchFriend.scores = totalDiff;
            }
            totalDiff = 0;
        }

        console.log('currentFriend* = ' + currentFriend.name);
        console.log('friend* = ' + friend.name);
        console.log('matchFriend* = ' + matchFriend.name);  // BEST MATCH FRIEND !

        // Push new friend onto the friendArray
        friendArray.push(friend);

        
        // return object matchFriend as JSON


        // res.json(matchFriend);
        

        console.log('friend** = ' + friend);
        console.log('matchFriend** = ' + matchFriend);
    });

    // ---------------------------------------------------------------------------
    // Clear out the table while working with the functionality.
    app.post("/api/clear", function() {
        // Empty out the arrays of data
        // tableData = [];
        // waitListData = [];
        friendArray = [];
        console.log(friendArray);
    });
};
