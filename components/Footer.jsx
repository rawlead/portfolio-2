import React from 'react';
import Fade from 'react-reveal/Fade';
import Social from './Social';

const Footer = () => (
  <footer className="footer">
    <Fade delay={200}>
      <div className="container">
        <div className="columns" style={{ marginBottom: '3rem' }}>
          <div className="column has-text-centered">
            <h1 className="is-size-3 section-title section-title__light">Get in Touch</h1>
          </div>
        </div>

        <Social linkStyle={{ color: '#888888' }} />

        <div className="columns">
          <div className="column">
            <figure className="image is-96x96">
              <a
                href="https://www.youracclaim.com/badges/61136f12-504c-475c-941f-7657fdd8c37e/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../static/oracle.png" alt="oracle-budge" />
              </a>
            </figure>
          </div>
        </div>

        <div className="columns">
          <div className="column has-text-centered has-text-grey-light">
            <p className="has-text-centered">
              Designed and Built by
              <span className="has-text-weight-bold"> IVAN SHYRAI</span>
            </p>
            <p>
              Made with
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;React
              </a>
              ,&nbsp;
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>
              ,&nbsp;
              <a
                href="https://bulma.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bulma
              </a>
              &nbsp;and
              <a
                href="https://prismic.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Prismic.io
              </a>
            </p>
            <p>
              <a href="https://github.com/rawlead/portfolio-2" target="_blank" rel="noopener noreferrer">
                View Source Code
              </a>
            </p>
            <p>2018</p>
          </div>
        </div>
      </div>
    </Fade>
    <style jsx>
      {`
        .image {
          transition: all .1s ease-in-out;        
          margin: 0 auto;
        }
        .image:hover {
          -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
          filter: grayscale(100%);
        }
        .footer {
          background: #0a0a0a;
        }
        .bulma {
          height: 30px;
        }
        .columns {
          margin-top: 2rem;
        }
        .content {
          display: flex;
          align-items: center;
        }
      
      `}
    </style>
  </footer>
);
export default Footer;
