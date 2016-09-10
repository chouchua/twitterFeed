/** @jsx React.DOM */

var React = require('react');

module.exports = Search = React.createClass({
    getInitialState:function(){
      return {
          searchInput:''
      }  
    },
    handleClick:function(){
        console.log("clicked");
        //update 
        
        
    },
    handleChange:function(event){
        console.log(event.target.value);
        this.setState({
            searchInput:event.target.value
        });
        // console.log(this.props.searchInput);
    },
    render: function(){
        return (
        <div className={"stuff " + (this.props.allowed ? "active" : "")}>
            <input type = 'text' value = {this.state.searchInput} onChange={this.handleChange}/>
            <button onClick = {this.handleClick}>Search</button>
        </div>
        )
    }
});