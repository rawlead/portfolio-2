import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ScaleLoader } from 'react-spinners';
import Footer from './Footer';
import Navbar from './Navbar';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1300);
  }

  render() {
    const { isLoading } = this.state;
    const { children } = this.props;
    return (
      <ParallaxProvider>
        {isLoading
          ? (
            <div className="preloader">
              <ScaleLoader
                className="preloader-spinner"
                sizeUnit="px"
                size={120}
                color="#f2f2f2"
              />
            </div>
          ) : (
            <React.Fragment>
              <Navbar />
              {children}
              <div className="fullscreen-panel fullscreen-panel-left is-hidden-touch" />
              <div className="fullscreen-panel fullscreen-panel-right is-hidden-touch" />

              <Footer />
            </React.Fragment>
          )
        }
        <style global jsx>
          {`
        body {
          background: #0a0a0a;
        }
        .fullscreen-panel {
          position: fixed;
          top: 0;
          bottom:0;
          width: 4vw;
          background-color: #0a0a0a;
          opacity: .75;
        }
        .fullscreen-panel-left {
          left:0;
        }
        .fullscreen-panel-right {
          right: 0;
        }
        .preloader {
          position: fixed;
          background-color: #0a0a0a;
          z-index: 999;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
        .preloader-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        * {
          font-family: 'Oswald', sans-serif !important;
          scroll-behavior: smooth;
        }
        .button {
          border-radius: 5px !important;
        }
        .section-title {
          text-align: center;
          max-width: 185px;
          margin-left: auto;
          margin-right: auto;
          text-transform: uppercase;
          padding-bottom: 1rem;
          font-weight: bold;
        }
        .section-title__dark {
          border-bottom: 3px solid #4a4a4a;
          border-radius: 5px;
        }
        .section-title__light {
          border-bottom: 3px solid hsl(0, 0%, 86%);
          border-radius: 5px;
          color: hsl(0, 0%, 86%);
        }
        /*effect-box*/
        .box-effect:after,
        .box-effect:before {
          content: '';
          position: absolute;
          left: 0;
          display: inline-block;
          height: 1em;
          width: 100%;
          margin-top: 10px;
          opacity: 0;
          -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
          transition: opacity 0.35s, transform 0.35s;
        }
        .box-effect:before {
          border-left: 1px solid;
          border-right: 1px solid;
          -webkit-transform: scale(1,0);
          transform: scale(1,0);
        }
        .box-effect:after {
          border-bottom: 1px solid;
          border-top: 1px solid;
          -webkit-transform: scale(0,1);
          transform: scale(0,1);
        }
        .box-effect:hover:after,
        .box-effect:hover:before {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      `}
        </style>
      </ParallaxProvider>
    );
  }
}

export default Layout;
