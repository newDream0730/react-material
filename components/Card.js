/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactStyle = require('react-style');

var Shadow = require('./Shadow');

var Card = React.createClass({

	styles: {

	  normalCardStyle: ReactStyle({
      backgroundColor: 'white',
      borderRadius: 2,
      margin: 8,
      height: 250,
      padding: 16,
      position: 'relative'
	  }),

	  headerStyle: ReactStyle({
      cursor: 'default',
      marginBottom: 35,
      marginTop: 0
	  })

	},


  render: function() {
    var props  = this.props;
	  var styles = this.styles;
    return <div styles={styles.normalCardStyle}>
      <Shadow size={1} />
      {props.title &&
        <h3 styles={styles.headerStyle}>{props.title}</h3>
      }
      {this.props.children}
    </div>;
  }

});

module.exports = Card;