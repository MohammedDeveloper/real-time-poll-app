/**
 * Inherit the base modules - Express Routing
 */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Vote = require("../models/Vote");

/// Inherit pusher
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '468746',
    key: 'a6e27e25e5cf94c37ebd',
    secret: '0d1272a6d0e541edffc1',
    cluster: 'us2',
    encrypted: true
});

/// set the routes - GET | To get the POLLS data from DB
/// route: /poll | Since we have set "/poll" to be used as base
router.get("/", (req, res) => {

   /// get the votes
   Vote.find()
   .then(votes => res.json({ success: true, votes: votes }))
   .catch(err => res.json({ success: false, message: "Votes retrieval failed" }));
});

/// set the routes - POST | To post the POLL data from UI to DB
router.post("/", (req, res) => {

    /// create an object to save in DB
    const voteObj = {
        pollChoice: req.body.pollChoice,
        votes: 1
    };

    /// save on DB as document
    new Vote(voteObj).save().then((vote) => {

        /// trigger the o/p using PUSHER 
        pusher.trigger('poll-app', 'my-vote', {
            votes: parseInt(vote.votes),
            pollChoice: vote.pollChoice
        });

        /// returned response...
        return res.json({ poll: req.body.poll, success: true, message: "Thank you for using this app to vote" });
    });
});

/// export the router
module.exports = router;