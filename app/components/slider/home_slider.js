import React from 'react';
import Carousel from 'nuka-carousel';

class HomeSlider extends React.Component {
constructor(props) {
      super(props);
  }
  render() {
    return (
      <section id="home-slider">
      <Carousel>
      <div className="moving-bg" style={{height: 500}}>
              <div className="sl-slide">
                <div className="slide-caption">
                  <div className="caption-content">
                    <h2 className="animated fadeInDown">Ian Enders</h2>

                    <span className="animated fadeInDown">
                      <p>I lived in Toronto.</p>
                      <p>I moved to San Francisco.</p>
                      <p>I now live in New York.</p>
                      <p>I read comic books and maintain a pretty big collection.</p>
                    </span>
                    <a href="#" className="btn btn-blue btn-effect">Join US</a>
                  </div>
                </div>
              </div>
      </div>
      <div style={{height: 500}}>
        <div >Reverse direction2</div>
      </div>
      <div style={{height: 500}}>
        <div >Reverse direction3</div>
      </div>
      </Carousel>
        <div id="slider" className="sl-slider-wrapper">
          <div className="sl-slider">
            <div className="sl-slide" data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2">
              <div className="bg-img bg-img-1">
              </div>
              <div className="slide-caption">
                <div className="caption-content">
                  <h2 className="animated fadeInDown">BLUE Onepage HTML5 Template</h2>
                  <span className="animated fadeInDown">Clean and Professional one page Template</span>
                  <a href="#" className="btn btn-blue btn-effect">Join US</a>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>
    );
  }
}

module.exports = HomeSlider;
