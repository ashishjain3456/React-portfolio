import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/header';
class App extends React.Component {
  static get propTypes() {
    return {
        children: PropTypes.any,
        onClickOut: PropTypes.func
    };
  }

  constructor(props) {
      super(props);
  }
  render() {
    console.log("App");
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
