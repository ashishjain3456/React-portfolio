import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static get propTypes() {
    return {
      item: PropTypes.object.isRequired,
      onClickOut: PropTypes.func.isRequired
    };
  }

  render() {
    return (
      <div
        className="cube"
        role="link"
        tabIndex="0"
        onClick={this.props.onClickOut.bind(null, this.props.item.key)}
        onKeyPress={() => {}}
      >
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
