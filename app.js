var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/friends");

var friendSchema = new mongoose.Schema({
    name: String,
    age: Number,
    expertise: String
});

var Friend = mongoose.model("Friend", friendSchema);

// var ajay = new Friend({
//     name: "Ajay Anireddy",
//     age: 32,
//     expertise: "All rounder"
// });

// ajay.save(function(err, friend) {
//     if (err) {
//         console.log("Friend couldn''t be saved");
//     }
//     else {
//         console.log("Friend saved to friends list...")
//     }
// });

// Friend.create({
//     name: "Nandagopala",
//     age: 37,
//     expertise: "Transcendentalist"
// }, function(err, friend) {
//     if (err) {
//         console.log("Friend couldn''t be saved");
//     }
//     else {
//         console.log("Friend saved to friends list...See below");
//     }
// });

Friend.remove({
    name: "Nandagopala",
    age: 37,
    expertise: "Transcendentalist"
}, function(err, friend) {
    if (err) {
        console.log("Friend couldn''t be removed");
    }
    else {
        console.log("Friend removed from friends list...See below");
    }
});

Friend.find({}, function(err, friends) {
    if (err) {
        console.log("Error while retrieving friends:");
        console.log(err);
    }
    else {
        console.log("List of friends:");
        console.log(friends);
    }
});
