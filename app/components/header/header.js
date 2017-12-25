import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header
        id="navigation"
        className="navbar-inverse navbar-fixed-top animated-header"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <h1 className="navbar-brand">
              <a href="#body">Blue</a>
            </h1>
          </div>
          <nav className="collapse navbar-collapse navbar-right">
            <ul id="nav" className="nav navbar-nav">
              <li><a href="#body">Home</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#portfolio">portfolio</a></li>
              <li><a href="#testimonials">Testimonial</a></li>
              <li><a href="#price">price</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

module.exports = Header;
