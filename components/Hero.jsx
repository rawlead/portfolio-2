import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => (
  <React.Fragment>

    {/* OUTER HERO IMAGE */}
    <section className="hero is-bold is-fullheight">
      <Parallax
        className="hero-parallax"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
      >
        {/* INNER HERO IMAGE */}
        <div className="hero-inner">
          {/* BIRDS */}
          <div className="bird-container bird-container--one">
            <div className="bird  bird--one" />
          </div>
          <div className="bird-container bird-container--two">
            <div className="bird  bird--two" />
          </div>
          {/* CENTERED CONTENT */}
          <div className="hero-content has-text-centered">
            <Fade delay={600}>
              <a className="image is-128x128 c-preview" style={{ margin: '0 auto' }} href="#info">
                <div className="myself c-preview__img" />
              </a>
            </Fade>
            <Fade delay={800}>
              <h1 className="title linear-text box-effect is-size-1 has-text-weight-bold has-text-grey-lighter">
                Ivan Shyrai
              </h1>
            </Fade>
            <Fade delay={1000}>
              <h2 className="subtitle linear-text has-text-grey-lighter">
                Java Full Stack Developer
              </h2>
            </Fade>
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
          height: 52px;
          right: 0;
          background: #0a0a0a;
          opacity: .75;
        }
        .hero-inner {
          background: url("../static/barcelona-2.jpg") center bottom;
          background-repeat: no-repeat;
          margin-left: 4vw;
          margin-right: 4vw;
          margin-top: 55px;
          background-size: cover;
          box-sizing: border-box;
          height: 100vh;
          overflow: hidden;
        }
        .hero-content {
          position:absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .image .myself {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: url('../static/me.jpg');
          background-size: cover;
          width: 128px;
          height: 128px;
          border-radius: 50%;
          mix-blend-mode: screen;
          opacity: .9;
        }
        .image {
          cursor: pointer;
          background: #0a0a0a;
          background: -webkit-linear-gradient(-45deg, #000000 0%,#000000 25%,#8561A1 50%,#DF758C 75%,#0a0a0a 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(135deg, #000000 0%,#000000 25%,#8561A1 50%,#DF758C 75%,#0a0a0a 100%);
          background-size: 400% 400%;
          border-radius: 50%;
          background-repeat: no-repeat;
          position: relative;
          transition: .2s all;
          background-position: 100% 100%;

        }
        .image:hover {
          background-position: 0;
        }
        .image:hover .myself {
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
          -webkit-transform: scale(0.5);
          transform: scale(0.5);
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
        @media screen and (max-width: 768px) {
          .hero-inner {
            margin-top: 0;
          }
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
  </React.Fragment>
);
export default Hero;
