import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';
import Footer from './Footer';
// import { initGA, logPageView } from '../utils/analytics';

class Layout extends React.Component {
  componentDidMount() {
 
  }

  render() {
    const { children } = this.props;
    return (
      <ParallaxProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" />
          <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
          <title>Ivan Shyrai</title>
        </Head>

        { children }

        <Footer />

        <style global jsx>
          {`
        body {
          background-color: #f2f2f2;
        }
        * {
          font-family: 'Oswald', sans-serif !important;
        }
        .button {
          border-radius: 0 !important;
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
        }
        .section-title__light {
          border-bottom: 3px solid #f5f5f5;
          color: #f5f5f5;
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
