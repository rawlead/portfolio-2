import React from 'react';
import Social from './Social';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
      setTimeout(() => {
        window.addEventListener('scroll', this.handleScroll);          
      }, 500);
  }

  handleScroll() {
    const header = document.querySelector(".navbar-social");
    if (!header)
        return;
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
      header.classList.add('navbar-social_scrolled');
    } else {
      header.classList.remove('navbar-social_scrolled');
    }
  }


  render() {
    return (
      <React.Fragment>
        <section className="navbar-social">

              <div className="item-wrapper bounce-top cl-effect-5">
                <a className="navbar-item has-text-white-ter" href="#about">
                  <span data-hover="About">About </span>|
                </a>

                <a className="navbar-item has-text-white-ter" href="#skills">
                  <span data-hover="Skills"> Skills </span>|
                </a>
                <a className="navbar-item has-text-white-ter" href="#education">
                  <span data-hover="Education"> Education </span>|
                </a>
                <a className="navbar-item has-text-white-ter" href="#projects">
                  <span data-hover="Projects"> Projects </span>
                </a>


              </div>


              <div className="social-wrapper bounce-top is-hidden-mobile">
                <Social linkStyle={{ color: '#f5f5f5', fontSize: '1.4rem' }} wrapperStyle={{ textAlign: 'right' }} />
              </div>

        </section>
        <style jsx>
          {`
          .navbar-social {
            position: absolute;
            z-index: 200;
            top: 0;
            left: 0;
            right: 0;
            display: block;
            transition: all .3s ease-in-out;
            padding: .9rem 2rem .9rem 0;
            overflow: hidden;
            background-color: #0a0a0a;
            opacity:.75;
            height: 65px;
          }
          .navbar-social .navbar-item {
            display: inline-block;
            font-size: 1.1rem;
            padding-top: .18rem;
            padding-bottom: .18rem;
            text-transform: uppercase;
            padding-right: 0;
            padding-left: 6px;
          }
          .navbar-social .navbar-item:hover {
            background-color: transparent;
           }
           .navbar-social .navbar-item span {
            margin-right: 6px;
           }

     

          .item-wrapper {
            position: absolute;
            z-index: 200;
            padding-left: 5%;
          }
          
          .navbar-social_scrolled {
            position: fixed;
            opacity: 1;
            border-bottom: 2px solid rgb(190,190,190);
          }
          
          .navbar-social_scrolled .social-wrapper a {
            color: hsl(0,0%,86%);
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
              opacity: .75;
            }
            24% {
              opacity: .75;
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
              opacity: .75;
            }
          }
          @keyframes bounce-top {
            0% {
              -webkit-transform: translateY(-100px);
                      transform: translateY(-100px);
              -webkit-animation-timing-function: ease-in;
                      animation-timing-function: ease-in;
              opacity: .75;
            }
            24% {
              opacity: .75;
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
              opacity: .75;
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
              opacity: .75;
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
              opacity: .75;
            }
          }
          
          /* Effect 5: same word slide in */
          .cl-effect-5 a {
            overflow: hidden;
          }
          
          .cl-effect-5 a span {
            position: relative;
            display: inline-block;
            -webkit-transition: -webkit-transform 0.3s;
            -moz-transition: -moz-transform 0.3s;
            transition: transform 0.3s;
          }
          
          .cl-effect-5 a span::before {
            position: absolute;
            top: 100%;
            content: attr(data-hover);
            font-weight: 700;
            color: #ffa5a5;
            -webkit-transform: translate3d(0,0,0);
            -moz-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
          }
          
          .cl-effect-5 a:hover span,
          .cl-effect-5 a:focus span {
            -webkit-transform: translateY(-100%);
            -moz-transform: translateY(-100%);
            transform: translateY(-100%);
          }
          
            `}
        </style>
      </React.Fragment>
    )
}
}

export default Navbar;
