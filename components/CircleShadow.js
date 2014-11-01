/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactStyle = require('react-style');

var Colors = require('../style/Colors');

var CircleShadowStyles = {

  normalStyle: ReactStyle({
    webkitTapHighlightColor: 'rgba(0,0,0,0)',
    backgroundColor: Colors.grey.P700,
    opacity: '0',
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: 'scale(1) translateZ(0)',
    transition: 'opacity .48s ease .1s , transform .001s ease .6s',
    willChange: 'opacity, transform'
  }),

  pressedStyle: ReactStyle({
    opacity: '.3',
    transform: 'scale(3) translateZ(0)',
    transition: 'opacity ease 0s, transform ease 0s'
  })

};

var CircleShadow = React.createClass({

  getInitialState:function() {
    return {
      active: false
    }
  },

  render: function() {
    var props = this.props;
    var styles = CircleShadowStyles;
    var state = this.state;
    var styles = [styles.normalStyle];
    if (state.active) {
      styles.push(styles.pressedStyle);
    }
    if (props.active && props.styles) {
      styles = styles.concat(props.styles);
    }

    return <div styles={styles} onMouseUp={this.onMouseUp} onMouseDown={this.onMouseDown}>

    </div>;
  },

  onMouseUp: function(){
    this.setState({active: false});
  },

  onMouseDown: function(){
    this.setState({active: true});
  }

});

module.exports = CircleShadow;
