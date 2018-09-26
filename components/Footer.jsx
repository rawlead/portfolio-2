import React from 'react';

const Footer = () => (
  <footer className="footer has-background-white-ter">
    <div className="container">
      <div className="columns">
        <div className="column has-text-centered">
          <div className="social-item">
            <a href="!" className="social-item__anchor"><i className="fab fa-facebook fa-lg" /></a>
          </div>
          <div className="social-item">
            <a href="!" className="social-item__anchor"><i className="fas fa-envelope fa-lg" /></a>
          </div>
          <div className="social-item">
            <a href="!" className="social-item__anchor"><i className="fab fa-linkedin fa-lg" /></a>
          </div>
          <div className="social-item">
            <a href="!" className="social-item__anchor"><i className="fab fa-github fa-lg" /></a>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column has-text-centered">
          <p className="has-text-centered">
            This site is made with React, Next and Bulma by
            <span className="has-text-weight-bold"> IVAN SHYRAI</span>
          </p>
          <p>
            The source code is available on
            <a href="https://github.com/rawlead/portfolio-2" target="_blank" rel="noopener noreferrer">
            &nbsp;GitHub
            </a>
          </p>
          <p>2018</p>
        </div>
      </div>

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
        <div className="column has-text-centered">
          <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">
            <img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24" />
          </a>
        </div>
      </div>
    </div>
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
          padding-top: 8rem;
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
        .social-item {
          display: inline-block;
          margin: 0 1rem;
        }
        .social-item__anchor {
          color: #4a4a4a;
          font-size: 2rem;
          transition: color .1s ease-in-out;        
        }
        .social-item__anchor:hover {
          color: #aaa;
        }
      `}
    </style>
  </footer>
);
export default Footer;
