import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';
import Navbar from './Navbar';

const Hero = () => (
  <Parallax
    className="hero-parallax"
    offsetYMax={30}
    offsetYMin={-30}
    slowerScrollRate
    tag="figure"
  >
    <section className="hero is-bold is-fullheight">
      <div className="hero-head">
        <Navbar />
      </div>
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
          <Fade delay={1200}>
            <h1 className="title box-effect is-size-1 has-text-weight-bold has-text-white">
              Ivan Shyrai
            </h1>
          </Fade>
          <Fade delay={1600}>
            <h2 className="subtitle has-text-white">
              Java Software Developer
            </h2>
          </Fade>
        </Parallax>
      </div>
    </section>
    <style jsx>
      {`
        .hero {
          background: url("../static/barcelona-1.jpg") center bottom;
          background-size: cover;
          display:block;
          overflow: hidden;
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
          border-radius: 50%;
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
        .bird {
          background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg');
          background-size: auto 100%;
          width: 88px;
          height: 125px;
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
          transform: scale(0) translateX(-10vw);
          -webkit-transform: scale(0) translateX(-10vw);
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }

        .bird-container--one {
          -webkit-animation-name: fly-right-one;
          -webkit-animation-duration: 15s;
          -webkit-animation-delay: 0;
          animation-name: fly-right-one;
          animation-duration: 15s;
          animation-delay: 0;
        }
        .bird-container--two {
          -webkit-animation-name: fly-right-two;
          -webkit-animation-duration: 17s;
          -webkit-animation-delay: .5s;
          animation-name: fly-right-two;
          animation-duration: 17s;
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
