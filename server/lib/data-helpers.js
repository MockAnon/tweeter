// "use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay").MongoClient;

// const db = require("../index.js").MongoClient;

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {

  return {

    // Saves a tweet to `db`
    saveTweet: function(callback) {
      db.collection("tweets").insertOne(callback);
    },

    // Get all tweets in `db`, sorted by newest first GET TWEETS
    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    }
  }
};

