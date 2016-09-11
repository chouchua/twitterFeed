/** @jsx React.DOM */

var React = require('react');

module.exports = Search = React.createClass({
    render:function(){
        return (
            <div>
                Suggestions for {this.props.suggest} ...
            </div>
        )
    }
});