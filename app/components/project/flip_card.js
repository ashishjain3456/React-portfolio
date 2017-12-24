import React from 'react';
//import FlipCard from 'react-flipcard';

import PropTypes from 'prop-types';
class Card extends React.Component {
  static get propTypes() {
    return {
      item:PropTypes.object,
        children: PropTypes.any,
        onClickOut: PropTypes.func
    };
}

  constructor(props) {
        super(props);
        this.state = {
          isFlipped: false
        };
    }

  // showBack() {
  //   this.setState({
  //     isFlipped: true
  //   });
  // }
  //
  // showFront() {
  //   this.setState({
  //     isFlipped: false
  //   });
  // }
  //
  // handleOnFlip(flipped) {
  //   if (flipped) {
  //     //this.refs.backButton.getDOMNode().focus();
  //   }
  // }
  //
  // handleKeyDown(e) {
  //   if (this.state.isFlipped && e.keyCode === 27) {
  //     this.showFront();
  //   }
  // }

  render() {
    return (
      <div className="cube">
        <div className="active-state">
            <h2>{this.props.item.title}</h2>
            <h2>{this.props.item.description}</h2>
        </div>
        <div className="default-state">
            <h2>{this.props.item.title}</h2>
        </div>
      </div>
    );
  }
}

module.exports = Card;
