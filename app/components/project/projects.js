import React from 'react';
import PropTypes from 'prop-types';
import Card from './flip_card';

class Projects extends React.Component {
  static get propTypes() {
    return {
      projects: PropTypes.array
    };
  }

  static get defaultProps() {
    return {
      projects: null
    };
  }

  render() {
    return (
      <section>
        <div className="moving-tiles" style={{ height: 500 }}>
          {this.props.projects.map((item, itemkey) => (
            <Card item={item} key={itemkey} />
          ))}
        </div>
      </section>
    );
  }
}

module.exports = Projects;
