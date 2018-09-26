/* eslint-disable */
// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
// ./pages/_document.js
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class extends Document {
  static async getInitialProps(ctx) {
    // static async getInitialProps({ renderPage }) {
    // const { html, head, errorHtml, chunks } = renderPage()
    // const styles = flush()
    // return { html, head, errorHtml, chunks, styles }

    // check if production
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    // pass isProduction back
    return { ...initialProps, isProduction };
  }

  // Function for injecting script contents into page
  setGoogleTags() {
    return {
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
      `
    }
  }

  render() {
    const { isProduction } = this.props;
    return (
      <html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics ONLY IF IN PRODUCTION */}
          {isProduction && (
            <React.Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              {/* injecting google tag if production */}
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </React.Fragment>
          )
          }
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" />
          <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
          <title>Ivan Shyrai</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
