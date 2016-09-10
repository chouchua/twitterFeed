var JSX = require('node-jsx').install(),
  React = require('react'),
  TweetsApp = React.createFactory(require('./components/TweetsApp.react')),
  Tweet = require('./models/Tweet'),
  ReactDom = require("react-dom/server");

module.exports = {

  index: function(req, res) {
    // Call static model method to get tweets in the db
    Tweet.getTweets(0,0, function(tweets, pages) {

      // Render React to a string, passing in our fetched tweets
      var markup = ReactDom.renderToString(
        TweetsApp({
          tweets: tweets
        })
      );
      // var markup = React.renderToString(
      //   TweetsApp({
      //     tweets: tweets
      //   })
      // );
      
      

      // Render our 'home' template
      res.render('home', {
        markup: markup, // Pass rendered react markup
        state: JSON.stringify(tweets) // Pass current state to client side
      });

    });
  },

  page: function(req, res) {
    // Fetch tweets by page via param
    Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {

      // Render as JSON
      res.send(tweets);

    });
  },
  
  search: function(req,res){
    var keyword = req.params.title;
    Tweet.searchTitle(keyword,function(tweets){
      console.log('found these tweets...');
      console.log(tweets);
      res.send(tweets);
    });
  },
  
  notfound: function(req,res){
    // res.send('what...',404);
    res.status(404).end('error');
  }

}
