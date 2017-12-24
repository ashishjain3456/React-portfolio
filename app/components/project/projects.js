import React from 'react';
import PropTypes from 'prop-types';
import Card from "./flip_card";
class Projects extends React.Component {
  static get propTypes() {
    return {
      projects:PropTypes.array,
        children: PropTypes.any,
        onClickOut: PropTypes.func
    };
}
constructor(props) {
      super(props);
  }
  render() {
    return (
      <section>
        <div className="moving-tiles" style={{height: 500}}>
        {this.props.projects.map((item, itemkey) =>
          <Card item={item} key={itemkey} />
          // <div className="box" key={itemkey}>
          //   <h2>{item.title}</h2>
          // </div>
        )}

        </div>
      </section>
    );
  }
}

module.exports = Projects;
