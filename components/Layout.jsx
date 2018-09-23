import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';
import Footer from './Footer';

class Layout extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
    // document.body.style.backgroundColor = '#0a0a0a';
  }

  render() {
    const { children } = this.props;
    return (
      <ParallaxProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
          <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Concert+One" rel="stylesheet" />
          <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
          <title>Ivan Shyrai</title>
        </Head>

        {children}

        <Footer />
        <style jsx>
          {`
            body {
              background-color: hsl(0,0,90%);
            }
          `}
        </style>
      </ParallaxProvider>
    );
  }
}
export default Layout;
