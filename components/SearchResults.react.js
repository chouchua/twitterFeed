/** @jsx React.DOM */

var React = require('react');
var Tweet = require('./Tweet.react.js');

module.exports = Results = React.createClass({
    getInitialState:function(){
        return {
            searchTweets:[
                {
                    _id:'12345',
                    screenname:'test',
                    body:'test message...',
                    author:"jimmy chou"
                }
            ]
        }
    },
    // Render our tweets
    render: function(){
        console.log(this.props.searchTweets)
        console.log(this.props.tweets)
        var content = '';
        // Build list items of single tweet components using map
        if(this.props.searchTweets){
            content = this.props.searchTweets.map(function(tweet){
            return (
                <Tweet key={tweet._id} tweet={tweet} />
            )
            });
        }

        // Return ul filled with our mapped tweets
        return (
        <ul className="tweets">{content}</ul>
        )

    }

}); 