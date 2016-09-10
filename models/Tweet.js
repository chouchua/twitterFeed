var mongoose = require('mongoose');

// Create a new schema for our tweet data
var schema = new mongoose.Schema({
    twid       : String
  , active     : Boolean
  , author     : String
  , avatar     : String
  , body       : String
  , date       : Date
  , screenname : String
});

// Create a static getTweets method to return tweet data from the db
schema.statics.getTweets = function(page, skip, callback) {
  console.log(page);
  console.log(skip);
  var tweets = [],
      start = (page * 10) + (skip * 1);

  // Query the db, using skip and limit to achieve page chunks
  // Tweet.find({},'twid active author avatar body date screenname',{skip: start, limit: 10}).sort({date: 'desc'})
  // .exec(function(err,docs){
     // If everything is cool...
  //   if(!err) {
  //     tweets = docs;  // We got tweets
  //     tweets.forEach(function(tweet){
  //       tweet.active = true; // Set them to active
  //     });
  //   }

  //   // Pass them back to the specified callback
  //   callback(tweets);

  // });
  var promise = Tweet.find({},'twid active author avatar body date screenname',
  {skip: start, limit: 10}).sort({date: 'desc'});
  
  promise.then(function (docs) {
    console.log('here');
      console.log(docs);
      // use doc
      tweets = docs;  // We got tweets
      tweets.forEach(function(tweet){
        tweet.active = true; // Set them to active
      });
      callback(tweets);
    });
};

schema.statics.searchTitle = function(keyword,callback){
  Tweet.find({screenname:keyword},function(err,docs){
    if(err){
      return handleError(err);
    }
    console.log(docs);
  })
  console.log(`searching for keyword ${keyword} ...`);
  // callback(tweets);
}


// Return a Tweet model based upon the defined schema
module.exports = Tweet = mongoose.model('Tweet', schema);