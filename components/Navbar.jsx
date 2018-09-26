import React from 'react';

const Navbar = () => (
  <React.Fragment>
    <nav className="navbar bounce-top">
      <div className="navbar-item">
        <a
          href="https://www.facebook.com/ivanshyrai"
          className="has-text-white text-focus-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook fa-lg" />
        </a>
      </div>

      <div className="navbar-item">
        <a
          href="mailto:ivan.shyrai@yahoo.com"
          target="_top"
          className="has-text-white text-focus-in"
        >
          <i className="fas fa-envelope fa-lg" />
        </a>
      </div>

      <div className="navbar-item">
        <a
          href="https://www.linkedin.com/in/ivan-shyrai/"
          className="has-text-white text-focus-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-lg" />
        </a>
      </div>

      <div className="navbar-item">
        <a
          href="https://github.com/rawlead"
          className="has-text-white text-focus-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-lg" />
        </a>
      </div>
    </nav>
    <style jsx>
      {`
      .navbar {
        display: block;
        text-align:center;
        transition: all .3s ease-in-out;        
        background-color: #0a0a0a;
        min-height: auto;
      }
      .navbar:hover {
        background: none;
      }
      .navbar:hover a {
        font-size: 125%;
      }
      .navbar-item {
        display: inline-block;
      }
      .navbar-item a {
        transition: all .1s ease-in-out;        
      }
      .navbar-item a:hover {
        color: #aaa !important;
      }
      .bounce-top {
        -webkit-animation: bounce-top 1s 1.2s both;
                animation: bounce-top 1s 1.2s both;
      }
      @-webkit-keyframes bounce-top {
        0% {
          -webkit-transform: translateY(-45px);
                  transform: translateY(-45px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
          opacity: 1;
        }
        24% {
          opacity: 1;
        }
        40% {
          -webkit-transform: translateY(-24px);
                  transform: translateY(-24px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        65% {
          -webkit-transform: translateY(-12px);
                  transform: translateY(-12px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        82% {
          -webkit-transform: translateY(-6px);
                  transform: translateY(-6px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        93% {
          -webkit-transform: translateY(-4px);
                  transform: translateY(-4px);
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
          -webkit-transform: translateY(-45px);
                  transform: translateY(-45px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
          opacity: 1;
        }
        24% {
          opacity: 1;
        }
        40% {
          -webkit-transform: translateY(-24px);
                  transform: translateY(-24px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        65% {
          -webkit-transform: translateY(-12px);
                  transform: translateY(-12px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        82% {
          -webkit-transform: translateY(-6px);
                  transform: translateY(-6px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        93% {
          -webkit-transform: translateY(-4px);
                  transform: translateY(-4px);
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
