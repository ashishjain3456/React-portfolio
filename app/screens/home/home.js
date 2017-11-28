import React from 'react';
import { Parallax, Background } from 'react-parallax';
import HomeSlider from '../../components/slider/home_slider';

class Home extends React.Component {
constructor(props) {
      super(props);
  }
  render() {
    const insideStyles ={background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
    return (
      <main className="site-content" role="main">
      <HomeSlider/>
      <Parallax className="moving-bg" strength={600}>
            <div className="view1" style={{height: 500}}>
              <div className="plane main">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>

              </div>
            </div>
          </Parallax>
          <Parallax strength={300}>
            <Background>
            <img src="public/img/slider/affinity.jpeg"/>
                <div style={{
                background: 'red'
              }}></div>
            </Background>
            <h1>something else1</h1>
          </Parallax>
          <Parallax className="moving-bg" strength={600}>
            <div className="moving-tiles" style={{height: 500}}>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </Parallax>
          <Parallax strength={300}>
            <Background>
            <img src="public/img/slider/affinity.jpeg"/>
                <div style={{
                background: 'red'
              }}></div>
            </Background>
            <h1>something else2</h1>
          </Parallax>
      <Parallax bgImage={"public/img/slider/affinity.jpeg"} strength={500}>
          <div style={{height: 500}}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>
          <Parallax bgImage={"public/img/slider/banner.jpg"} blur={{min: -1,max:3}}>
            <div style={{height: 500}}>
              <div style={insideStyles}>Dynamic Blur</div>
            </div>
          </Parallax>
          <Parallax strength={300}>
            <Background>
            <img src="public/img/slider/affinity.jpeg"/>
                <div style={{
                background: 'red'
              }}></div>
            </Background>
            <h1>something else</h1>
          </Parallax>
          <Parallax bgImage={"public/img/slider/cinelli.jpeg"} strength={-100}>
            <div style={{height: 500}}>
              <div style={insideStyles}>Reverse direction</div>
            </div>
          </Parallax>
      </main>
    );
  }
}

module.exports = Home;
