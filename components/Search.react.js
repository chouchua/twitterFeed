/** @jsx React.DOM */

var React = require('react');
var Suggestions = require('./Suggestions.react.js');
var Loader2 = require("./Loader2.react.js");

module.exports = Search = React.createClass({
    getInitialState:function(){
      return {
          searchInput:'',
          searching:false,
          cachedSearch:{}
      }  
    },
    handleClick:function(){
        console.log("clicked");
        //update 
    },
    handleChange:function(event){
        console.log(event.target.value);
        var self = this;
        this.setState({
            searchInput:event.target.value,
            searching:true
        });
        setTimeout(function(){
            console.log('loadgin');
        // Set application state (Not paging, add tweets)
            self.setState({searching:false});
      }, 1000);
        // console.log(this.props.searchInput);
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
            <Loader2 paging = {this.state.searching}/>
            <Suggestions suggest={this.state.searchInput}/>
        </div>
        )
    }
});