import React from 'react';
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
  }


  render() {
    return (
      <div className="cube" onClick={this.props.onClickOut.bind(null, this.props.item.key)}>
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
