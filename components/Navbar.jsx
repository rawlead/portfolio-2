import React from 'react';
import Social from './Social';

const Navbar = () => (
  <React.Fragment>
    <nav className="navbar-social bounce-top has-text-centered">
      <div className="container">
        <Social linkStyle={{ color: '#f5f5f5' }} />
      </div>
    </nav>
    <style jsx>
      {`
      .navbar-social {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        right: 0;
        display: block;
        transition: all .3s ease-in-out;    
        padding: .4rem 0;  
      }

      .bounce-top {
        -webkit-animation: bounce-top 1s 1.2s both;
                animation: bounce-top 1s 1.2s both;
      }
      @-webkit-keyframes bounce-top {
        0% {
          -webkit-transform: translateY(-100px);
                  transform: translateY(-100px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
          opacity: 1;
        }
        24% {
          opacity: 1;
        }
        40% {
          -webkit-transform: translateY(-50px);
                  transform: translateY(-50px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        65% {
          -webkit-transform: translateY(-25px);
                  transform: translateY(-25px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        82% {
          -webkit-transform: translateY(-12px);
                  transform: translateY(-12px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        93% {
          -webkit-transform: translateY(-6px);
                  transform: translateY(-6px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        25%,
        55%,
        75%,
        87% {
          -webkit-transform: translateY(0px);
                  transform: translateY(0px);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        100% {
          -webkit-transform: translateY(0px);
                  transform: translateY(0px);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
          opacity: 1;
        }
      }
      @keyframes bounce-top {
        0% {
          -webkit-transform: translateY(-100px);
                  transform: translateY(-100px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
          opacity: 1;
        }
        24% {
          opacity: 1;
        }
        40% {
          -webkit-transform: translateY(-50px);
                  transform: translateY(-50px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        65% {
          -webkit-transform: translateY(-25px);
                  transform: translateY(-25px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        82% {
          -webkit-transform: translateY(-12px);
                  transform: translateY(-12px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        93% {
          -webkit-transform: translateY(-6px);
                  transform: translateY(-6px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        25%,
        55%,
        75%,
        87% {
          -webkit-transform: translateY(0px);
                  transform: translateY(0px);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        100% {
          -webkit-transform: translateY(0px);
                  transform: translateY(0px);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
          opacity: 1;
        }
      }
      .text-focus-in {
        -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.4s both;
                animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.4s both;
      }
      @-webkit-keyframes text-focus-in {
        0% {
          -webkit-filter: blur(12px);
                  filter: blur(12px);
          opacity: 0;
        }
        100% {
          -webkit-filter: blur(0px);
                  filter: blur(0px);
          opacity: 1;
        }
      }
      @keyframes text-focus-in {
        0% {
          -webkit-filter: blur(12px);
                  filter: blur(12px);
          opacity: 0;
        }
        100% {
          -webkit-filter: blur(0px);
                  filter: blur(0px);
          opacity: 1;
        }
      }
        `}
    </style>
  </React.Fragment>
);
export default Navbar;
