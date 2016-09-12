/** @jsx React.DOM */

var React = require('react');
var Suggestions = require('./Suggestions.react.js');
var Loader = require("./Loader2.react.js");
var Tweets = require("./Tweets.react.js");


module.exports = Search = React.createClass({
    getInitialState:function(){
      return {
          searchInput:'',
          searching:false,
          cachedSearch:{},
          tweets:[]
      }  
    },
    handleClick:function(){
        console.log("clicked");
        //update 
    },
    searchKeyword: function(keyword){
        var request = new XMLHttpRequest(), self = this;
        console.log("in searchKeyword")
        request.open('GET','search/' + keyword, true);
        request.onload = function(){
            if (request.status >= 200 && request.status < 400){
                // Load our search results
                console.log('here...',JSON.parse(request.responseText));
                self.loadSearchResults(JSON.parse(request.responseText));
                
            } else {
                // Set application state (Not paging, paging complete)
                console.log('failed');
                self.setState({searching:false});
            }
        }
        request.send();
    },
    loadSearchResults:function(searchTweets){
        var self= this;
        if(searchTweets.length>0){
            searchTweets.forEach(function(tweet){
                // tweet.screenname='jimmy';
                tweet.active = true;
            })
        }
        console.log(searchTweets);
        setTimeout(function(){
            console.log(typeof searchTweets);
        // Set application state (Not paging, add tweets)
            self.setState({searching:false, tweets:searchTweets});
            // self.setState({searching:false, tweets:[{_id:'12345',screenname:'test',body:'test message...',author:"jimmy chou",active:true}]});
        }, 1000);
    },
    handleChange:function(event){
        console.log(event.target.value);
        var keyWord = event.target.value;
        var self = this;
        this.setState({
            searchInput:event.target.value,
            searching:true
        });
        self.searchKeyword(keyWord);
        
        // console.log(this.props.searchInput);
        // this.loadResults();
    },
    loadResults:function(){
        this.setState({tweets:[
                {
                    _id:'12345',
                    screenname:'test',
                    body:'test message...',
                    author:"jimmy chou",
                    active:true
                }
            ]})
    },
    processEnter:function(event) {
        if(event.keyCode == 13 || event.which == 13){
            console.log('enter pressed')
        }
    },
    render: function(){
        return (
        
        <div className={"stuff " + (this.props.allowed ? "active" : "")}>
        <h4>Search for tweets</h4>
            <input type = 'text' onKeyPress={this.processEnter} defaultValue = "Input keyword to search" value = {this.state.searchInput} onChange={this.handleChange}/>
            <button onClick = {this.handleClick}>Search</button>
            <Loader paging = {this.state.searching}/>
            <Suggestions suggest={this.state.searchInput}/>
            <Tweets tweets={this.state.tweets}/>
        </div>
        )
    }
});