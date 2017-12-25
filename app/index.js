import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/home/home';
import App from './app';
import '../public/scss/style.scss';
import '../public/css/slit-slider.css';
import '../public/css/animate.css';
import '../public/css/font-awesome.min.css';

// import '../public/js/jquery-1.11.1.min.js';
// import '../public/js/main.js';

ReactDOM.render(
  (
    <HashRouter>
      <App>
        <Switch>
          <Route exact path="/" name="home" component={Home} />
        </Switch>
      </App>
    </HashRouter>
  ),
  document.getElementById('container')
);
