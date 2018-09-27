import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
// import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
// import { initGA, logPageView } from '../utils/analytics';

const Layout = ({ children }) => (
  <ParallaxProvider>
    <Navbar />

    {children}

    <Footer />

    <style global jsx>
      {`
        body {
          background-color: #f2f2f2;
        }
        html,
        body {

        } 
        * {
          font-family: 'Oswald', sans-serif !important;
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

export default Layout;
