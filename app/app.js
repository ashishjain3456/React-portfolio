import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/header';

class App extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any
    };
  }
  static get defaultProps() {
    return {
      children: null
    };
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
