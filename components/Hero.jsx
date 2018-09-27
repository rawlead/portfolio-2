import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => (
  <Parallax
    className="hero-parallax"
    offsetYMax={30}
    offsetYMin={-30}
    slowerScrollRate
    tag="figure"
  >
    <section className="hero is-bold is-fullheight">
      <div className="hero-cover" />
      <Parallax
        className="hero-parallax"
        offsetYMax={10}
        offsetYMin={-10}
        tag="figure"
      >
        <div className="hero-inner">
          {/* BIRDS */}
          <div className="bird-container bird-container--one">
            <div className="bird  bird--one" />
          </div>
          <div className="bird-container bird-container--two">
            <div className="bird  bird--two" />
          </div>
          <div className="hero-content has-text-centered">
            <Parallax
              className="custom-class"
              offsetYMax={30}
              offsetYMin={-30}
              slowerScrollRate={false}
              tag="figure"
            >
              <Fade delay={800}>
                <a className="image is-128x128" style={{ margin: '0 auto' }} href="!">
                  <div className="myself" />
                </a>
              </Fade>
            </Parallax>
            <Parallax
              className="custom-class"
              offsetYMax={20}
              offsetYMin={-20}
              slowerScrollRate={false}
              tag="figure"
            >
              <Fade delay={1000}>
                <h1 className="title box-effect is-size-1 has-text-weight-bold has-text-grey-lighter">
                  Ivan Shyrai
                </h1>
              </Fade>
              <Fade delay={1400}>
                <h2 className="subtitle has-text-grey-lighter">
                  Java Full Stack Developer
                </h2>
              </Fade>
            </Parallax>
          </div>
        </div>
      </Parallax>
    </section>
    <style jsx>
      {`
        .hero-parallax {
          display: inline-block !important;
        }
        .hero {
          background: url("../static/barcelona-1.jpg") center bottom;
          background-size: cover;
          overflow: hidden;
          background-repeat: no-repeat;
        }
        .hero-cover {
          position: absolute;
          top:0;
          left: 0;
          right: 0;
          bottom:0;
          background: #0a0a0a;
          opacity: .75;
        }
        .hero-inner {
          background: url("../static/barcelona-2.jpg") center bottom;
          background-repeat: no-repeat;
          margin-left: auto;
          margin-right: auto;
          margin-top: 52px;
          background-size: cover;
          height: 100vh;
          width: 92vw;
          border-left: 2px solid #0A0A0A;
          border-top: 2px solid #0A0A0A;
          border-right: 2px solid #0A0A0A;
          overflow: hidden;
          border-radius: 5px;
        }
        .hero-content {
          position:absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .myself {
          background: url('../static/me.jpg');
          background-size: cover;
          -webkit-transition: all .3s ease-in-out;
          transition: all .3s ease-in-out;
          will-change: transform;
          width: 128px;
          height: 128px;
          border-radius: 5px;
        }
        .myself:hover {
          background: url('../static/me2.jpg');
          background-size: cover;
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
          -webkit-transform: rotate(-360deg);
          transform: rotate(-360deg);
          cursor: pointer;
        }
        .bird {
          background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg');
          background-size: auto 100%;
          width: 88px;
          height: 125px;
          z-index: -1;
          will-change: background-position;
          -webkit-animation-name: fly-cycle;
          animation-name: fly-cycle;
          -webkit-animation-timing-function: steps(10);
          animation-timing-function: steps(10);
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }
        .bird--one {
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
        }
        .bird--two {
          -webkit-animation-duration: 0.9s;
          animation-duration: 0.9s;
          -webkit-animation-delay: -0.75s;
          animation-delay: -0.75s;
        }
        .bird-container {
          position: absolute;
          top: 20%;
          left: -10%;
          will-change: transform;
          -webkit-transform: scale(0) translateX(-10vw);
          transform: scale(0) translateX(-10vw);
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }
        .bird-container--one {
          -webkit-animation-name: fly-right-one;
          animation-name: fly-right-one;
          -webkit-animation-duration: 15s;
          animation-duration: 15s;
          -webkit-animation-delay: 0;
          animation-delay: 0;
        }
        .bird-container--two {
          -webkit-animation-name: fly-right-two;
          animation-name: fly-right-two;
          -webkit-animation-duration: 17s;
          animation-duration: 17s;
          -webkit-animation-delay: .5s;
          animation-delay: .5s;
        }
        @-webkit-keyframes fly-cycle {
          100% {
            -webkit-background-position: -900px 0;
            background-position: -900px 0;
          } 
        }
        @keyframes fly-cycle {
          100% {
            -webkit-background-position: -900px 0;
            background-position: -900px 0;
          } 
        }
        @-webkit-keyframes fly-right-one {
          0% {
            -webkit-transform: scale(0.3) translateX(-10vw);
            transform: scale(0.3) translateX(-10vw);
          }
          
          10% {
            -webkit-transform: translateY(2vh) translateX(10vw) scale(0.4);

            transform: translateY(2vh) translateX(10vw) scale(0.4);
          }
          
          20% {
            -webkit-transform: translateY(0vh) translateX(30vw) scale(0.5);
            transform: translateY(0vh) translateX(30vw) scale(0.5);
          }
          
          30% {
            -webkit-transform: translateY(4vh) translateX(50vw) scale(0.6);
            transform: translateY(4vh) translateX(50vw) scale(0.6);
          }
          
          40% {
            -webkit-transform: translateY(2vh) translateX(70vw) scale(0.6);
            transform: translateY(2vh) translateX(70vw) scale(0.6);
          }
          
          50% {
            -webkit-transform: translateY(0vh) translateX(90vw) scale(0.6);
            transform: translateY(0vh) translateX(90vw) scale(0.6);
          }
          
          60% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.6);
            transform: translateY(0vh) translateX(110vw) scale(0.6);
          }
          
          100% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.6);
            transform: translateY(0vh) translateX(110vw) scale(0.6);
          }
        }
        @keyframes fly-right-one {
          0% {
            -webkit-transform: scale(0.3) translateX(-10vw);
            transform: scale(0.3) translateX(-10vw);
          }
          
          10% {
            -webkit-transform: translateY(2vh) translateX(10vw) scale(0.4);
            transform: translateY(2vh) translateX(10vw) scale(0.4);
          }
          
          20% {
            -webkit-transform: translateY(0vh) translateX(30vw) scale(0.5);
            transform: translateY(0vh) translateX(30vw) scale(0.5);
          }
          
          30% {
            -webkit-transform: translateY(4vh) translateX(50vw) scale(0.6);
            transform: translateY(4vh) translateX(50vw) scale(0.6);
          }
          
          40% {
            -webkit-transform: translateY(2vh) translateX(70vw) scale(0.6);
            transform: translateY(2vh) translateX(70vw) scale(0.6);
          }
          
          50% {
            -webkit-transform: translateY(0vh) translateX(90vw) scale(0.6);
            transform: translateY(0vh) translateX(90vw) scale(0.6);
          }
          
          60% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.6);
            transform: translateY(0vh) translateX(110vw) scale(0.6);
          }
          
          100% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.6);
            transform: translateY(0vh) translateX(110vw) scale(0.6);
          }
        }
        @-webkit-keyframes fly-right-two {
          0% {
            -webkit-transform: translateY(-2vh) translateX(-10vw) scale(0.5);
            transform: translateY(-2vh) translateX(-10vw) scale(0.5);
          }
          10% {
            -webkit-transform: translateY(0vh) translateX(10vw) scale(0.4);
            transform: translateY(0vh) translateX(10vw) scale(0.4);
          }
          20% {
            -webkit-transform: translateY(-4vh) translateX(30vw) scale(0.6);
            transform: translateY(-4vh) translateX(30vw) scale(0.6);
          }
          30% {
            -webkit-transform: translateY(1vh) translateX(50vw) scale(0.45);
            transform: translateY(1vh) translateX(50vw) scale(0.45);
          }
          40% {
            -webkit-transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
            transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
          }
          50% {
            -webkit-transform: translateY(0vh) translateX(90vw) scale(0.45);
            transform: translateY(0vh) translateX(90vw) scale(0.45);
          }

          60% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.45);
            transform: translateY(0vh) translateX(110vw) scale(0.45);
          }

          100% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.45);
            transform: translateY(0vh) translateX(110vw) scale(0.45);
          }
        }
        @keyframes fly-right-two {
          0% {
            -webkit-transform: translateY(-2vh) translateX(-10vw) scale(0.5);
            transform: translateY(-2vh) translateX(-10vw) scale(0.5);
          }
          10% {
            -webkit-transform: translateY(0vh) translateX(10vw) scale(0.4);
            transform: translateY(0vh) translateX(10vw) scale(0.4);
          }
          20% {
            -webkit-transform: translateY(-4vh) translateX(30vw) scale(0.6);
            transform: translateY(-4vh) translateX(30vw) scale(0.6);
          }
          30% {
            -webkit-transform: translateY(1vh) translateX(50vw) scale(0.45);
            transform: translateY(1vh) translateX(50vw) scale(0.45);
          }
          40% {
            -webkit-transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
            transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
          }
          50% {
            -webkit-transform: translateY(0vh) translateX(90vw) scale(0.45);
            transform: translateY(0vh) translateX(90vw) scale(0.45);
          }

          60% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.45);
            transform: translateY(0vh) translateX(110vw) scale(0.45);
          }

          100% {
            -webkit-transform: translateY(0vh) translateX(110vw) scale(0.45);
            transform: translateY(0vh) translateX(110vw) scale(0.45);
          }
        }

      `}
    </style>
  </Parallax>
);
export default Hero;
