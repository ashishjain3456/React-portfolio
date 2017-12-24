import React from 'react';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';

class HomeSlider extends React.Component {
  static get propTypes() {
    return {
      carouselItems:PropTypes.array,
        children: PropTypes.any,
        onClickOut: PropTypes.func
    };
}
constructor(props) {
      super(props);
  }
  render() {
    return (
      <section id="home-slider">
        <Carousel autoplay={true} wrapAround={true} easing={'easeInQuint'}>
        {this.props.carouselItems.map((item, itemkey) =>
          <div className="moving-bg"  style={{height: 500}} key={itemkey}>
            <div className="sl-slide">
              <div className="slide-caption">
                <div className="caption-content">
                  <h2 className="animated fadeInDown">{item.name}</h2>
                  <span className="animated fadeInDown">
                    <p>{item.description}</p>
                  </span>
                  <a href="#" className="btn btn-blue btn-effect">Join US</a>
                </div>
              </div>
            </div>
          </div>
        )}
        </Carousel>
      </section>
    );
  }
}

module.exports = HomeSlider;
